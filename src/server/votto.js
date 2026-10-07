import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/', async (req, res) => {
  try {
    const { message, mode = 'cute' } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        error: 'Xabar bo‘sh.'
      });
    }

    const modeText = {
      cute: 'Do‘stona, quvnoq va mehribon mentor kabi gapir.',
      strong: 'Ishonchli, jiddiy va talabchan mentor kabi gapir.',
      angry: 'Anime uslubidagi hazilomuz, biroz jahldor mentor kabi gapir, lekin haqorat qilma.'
    };

    const response = await openai.responses.create({
      model: 'gpt-6-luna',

      instructions: `
Sen VOTTO AI'san.

Sen VOTTO Academy platformasining dasturlash mentorisan.

${modeText[mode] || modeText.cute}

Asosiy qoidalar:
- Foydalanuvchi bilan asosan o‘zbek tilida gaplash.
- HTML, CSS, JavaScript, React, Next.js, Node.js, Express va MongoDB bo‘yicha yordam ber.
- Tushuntirishlarni o‘quvchining darajasiga moslashtir.
- Kod kerak bo‘lsa, ishlaydigan kod ber.
- Xatolarni tushuntirganda sababini va aniq yechimini ko‘rsat.
- Keraksiz uzun javob bermaslikka harakat qil.
- O‘quvchini motivatsiya qil.
- O‘zingni VOTTO deb tanishtir.
      `,

      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error('VOTTO ERROR:', error);

    res.status(500).json({
      error: 'VOTTO AI bilan bog‘lanishda xatolik yuz berdi.'
    });
  }
});

export default router;