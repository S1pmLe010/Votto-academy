import React, { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import './ai.css';

export default function VottoAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('cute');

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Salom! Men VOTTO 👋 Dasturlash bo‘yicha nimani o‘rganmoqchisan?'
    }
  ]);

  async function sendMessage(e) {
    e.preventDefault();

    const text = input.trim();

    if (!text || loading) return;

    setInput('');

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text
      }
    ]);

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/votto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: text,
          mode
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server xatosi');
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: data.reply
        }
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Hozir server bilan bog‘lana olmadim 😅 Backend ishlayotganini tekshir.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          className="vfab"
          onClick={() => setOpen(true)}
          aria-label="VOTTO AI"
        >
          <Bot size={25} />
        </button>
      )}

      {open && (
        <div className="vpanel">

          <div className="vhead">
            <div className="vface">
              <Sparkles size={18} />
            </div>

            <div>
              <strong>VOTTO AI</strong>
              <span>Academy Mentor</span>
            </div>

            <button
              className="vclose"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <div className="modes">
            <button
              className={mode === 'cute' ? 'active' : ''}
              onClick={() => setMode('cute')}
            >
              Cute
            </button>

            <button
              className={mode === 'strong' ? 'active' : ''}
              onClick={() => setMode('strong')}
            >
              Strong
            </button>

            <button
              className={mode === 'angry' ? 'active' : ''}
              onClick={() => setMode('angry')}
            >
              Angry
            </button>
          </div>

          <div className="history">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`dialog ${
                  message.role === 'user' ? 'user' : 'bot'
                }`}
              >
                {message.text}
              </div>
            ))}

            {loading && (
              <div className="dialog bot">
                VOTTO yozmoqda...
              </div>
            )}
          </div>

          <form onSubmit={sendMessage}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="VOTTOga savol yoz..."
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
            >
              <Send size={18} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}