export const lessons = [
  // =========================================================
  // 01 · HTML + CSS — 12 LESSONS
  // =========================================================

  {
    id: 'html-01',
    module: 'html',
    order: 1,
    title: 'HTML nima?',
    time: 15,
    difficulty: 'Boshlang‘ich',
    xp: 10,
    description:
      'HTML web sahifaning asosiy tuzilmasini yaratish uchun ishlatiladi. Brauzer HTML kodini o‘qib, sahifani foydalanuvchiga ko‘rsatadi.',
    topics: ['HTML', 'document', 'element', 'browser'],
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>Mening sahifam</title>
  </head>

  <body>
    <h1>Salom, VOTTO!</h1>
  </body>
</html>`,
    task: 'Oddiy HTML sahifa yarating va unga o‘zingiz haqingizda sarlavha qo‘shing.',
    tip: 'HTML — sahifaning skeleti hisoblanadi.'
  },

  {
    id: 'html-02',
    module: 'html',
    order: 2,
    title: 'HTML elementlari',
    time: 15,
    difficulty: 'Boshlang‘ich',
    xp: 10,
    description:
      'HTML sahifa turli elementlardan tashkil topadi. Har bir element ma’lum bir vazifani bajaradi.',
    topics: ['element', 'tag', 'opening tag', 'closing tag'],
    code: `<h1>Sarlavha</h1>
<p>Bu oddiy matn.</p>
<button>Bosish</button>`,
    task: 'Sahifangizga h1, p va button elementlarini qo‘shing.',
    tip: 'Element nomini vazifasiga qarab tanlang.'
  },

  {
    id: 'html-03',
    module: 'html',
    order: 3,
    title: 'Sarlavha va matn',
    time: 15,
    difficulty: 'Boshlang‘ich',
    xp: 10,
    description:
      'h1 dan h6 gacha bo‘lgan elementlar sarlavhalar uchun, p esa oddiy matn uchun ishlatiladi.',
    topics: ['h1', 'h2', 'h3', 'p'],
    code: `<h1>Asosiy sarlavha</h1>
<h2>Bo‘lim</h2>
<h3>Kichik bo‘lim</h3>

<p>Bu sahifadagi matn.</p>`,
    task: 'Portfolio sahifangiz uchun uch xil darajadagi sarlavha yarating.',
    tip: 'h1 odatda sahifaning asosiy sarlavhasi bo‘ladi.'
  },

  {
    id: 'html-04',
    module: 'html',
    order: 4,
    title: 'Linklar',
    time: 15,
    difficulty: 'Boshlang‘ich',
    xp: 10,
    description:
      'a elementi boshqa sahifa yoki web manzilga o‘tish uchun ishlatiladi.',
    topics: ['a', 'href', 'link', 'navigation'],
    code: `<a href="https://example.com">
  Saytga o‘tish
</a>`,
    task: 'GitHub yoki boshqa foydali saytga olib boradigan link yarating.',
    tip: 'Link manzili href atributida yoziladi.'
  },

  {
    id: 'html-05',
    module: 'html',
    order: 5,
    title: 'Rasmlar',
    time: 15,
    difficulty: 'Boshlang‘ich',
    xp: 10,
    description:
      'img elementi sahifaga rasm qo‘shish uchun ishlatiladi. src rasm manzilini, alt esa rasm tavsifini bildiradi.',
    topics: ['img', 'src', 'alt', 'image'],
    code: `<img
  src="/images/avatar.jpg"
  alt="Profil rasmi"
/>`,
    task: 'Sahifangizga bitta rasm qo‘shing va unga mazmunli alt yozing.',
    tip: 'alt atributini unutmaslik yaxshi amaliyot.'
  },

  {
    id: 'html-06',
    module: 'html',
    order: 6,
    title: 'Ro‘yxatlar',
    time: 15,
    difficulty: 'Boshlang‘ich',
    xp: 10,
    description:
      'ul va ol elementlari ro‘yxatlar yaratish uchun ishlatiladi. li esa ro‘yxatdagi bitta elementni bildiradi.',
    topics: ['ul', 'ol', 'li', 'list'],
    code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>O‘rganish</li>
  <li>Mashq qilish</li>
  <li>Loyiha yaratish</li>
</ol>`,
    task: 'O‘rganayotgan texnologiyalaringiz ro‘yxatini yarating.',
    tip: 'Tartib muhim bo‘lmasa ul, muhim bo‘lsa ol ishlating.'
  },

  {
    id: 'html-07',
    module: 'html',
    order: 7,
    title: 'Formalar',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'Formalar foydalanuvchidan ma’lumot olish uchun ishlatiladi. input, label va button eng ko‘p ishlatiladigan elementlardir.',
    topics: ['form', 'input', 'label', 'button'],
    code: `<form>
  <label>Ismingiz</label>
  <input type="text" />

  <button type="submit">
    Yuborish
  </button>
</form>`,
    task: 'Ism va email kiritish mumkin bo‘lgan forma yarating.',
    tip: 'Har bir input uchun tushunarli label berish foydali.'
  },

  {
    id: 'html-08',
    module: 'html',
    order: 8,
    title: 'Semantic HTML',
    time: 20,
    difficulty: 'O‘rta',
    xp: 15,
    description:
      'Semantic elementlar sahifaning ma’nosini aniqroq ifodalaydi. header, main, section va footer bunga misol bo‘ladi.',
    topics: ['header', 'main', 'section', 'footer'],
    code: `<header>
  <h1>VOTTO Academy</h1>
</header>

<main>
  <section>
    <h2>Kurslar</h2>
  </section>
</main>

<footer>
  2026 VOTTO Academy
</footer>`,
    task: 'Portfolio sahifangizni semantic HTML yordamida tuzing.',
    tip: 'div o‘rniga ma’nosi bor semantic element ishlatish mumkin bo‘lsa, undan foydalaning.'
  },

  {
    id: 'html-09',
    module: 'html',
    order: 9,
    title: 'CSS bilan tanishish',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'CSS HTML elementlarining ko‘rinishini boshqaradi. Rang, o‘lcham, joylashuv va animatsiyalar CSS orqali beriladi.',
    topics: ['CSS', 'selector', 'property', 'value'],
    code: `h1 {
  color: gold;
  font-size: 40px;
}

p {
  color: white;
}`,
    task: 'HTML sahifangizdagi sarlavha va matn ranglarini o‘zgartiring.',
    tip: 'CSS qoidasi selector, property va value qismlaridan iborat.'
  },

  {
    id: 'html-10',
    module: 'html',
    order: 10,
    title: 'CSS Box Model',
    time: 20,
    difficulty: 'O‘rta',
    xp: 15,
    description:
      'Har bir HTML element box modelga ega. Uning asosiy qismlari content, padding, border va margin hisoblanadi.',
    topics: ['content', 'padding', 'border', 'margin'],
    code: `.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #333;
  margin: 20px;
}`,
    task: 'Card elementiga padding, border va margin qo‘shing.',
    tip: 'Box modelni tushunish CSS layout uchun juda muhim.'
  },

  {
    id: 'html-11',
    module: 'html',
    order: 11,
    title: 'Flexbox',
    time: 25,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Flexbox elementlarni bir qator yoki ustunda joylashtirishni osonlashtiradi. Zamonaviy UI yaratishda juda ko‘p ishlatiladi.',
    topics: ['display flex', 'justify-content', 'align-items', 'gap'],
    code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}`,
    task: 'Uchta cardni bitta qatorda Flexbox yordamida joylashtiring.',
    tip: 'justify-content asosiy o‘q, align-items esa ikkilamchi o‘q bo‘yicha joylashtiradi.'
  },

  {
    id: 'html-12',
    module: 'html',
    order: 12,
    title: 'Responsive dizayn',
    time: 25,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Responsive dizayn saytning telefon, planshet va kompyuter ekranlarida to‘g‘ri ko‘rinishini ta’minlaydi.',
    topics: ['media query', 'mobile', 'tablet', 'responsive'],
    code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`,
    task: 'Card gridini mobil ekran uchun responsive qiling.',
    tip: 'Avval mobil ekran haqida o‘ylash yaxshi yondashuv.'
  },

  // =========================================================
  // 02 · JAVASCRIPT — 18 LESSONS
  // =========================================================

  {
    id: 'js-variables',
    module: 'javascript',
    order: 1,
    title: 'O‘zgaruvchilar: let va const',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'O‘zgaruvchilar ma’lumotlarni dastur davomida saqlashga yordam beradi. Zamonaviy JavaScriptda ko‘pincha let va const ishlatiladi.',
    topics: ['let', 'const', 'variable', 'assignment'],
    code: `const name = "Behruz";
let age = 15;

age = 16;

console.log(name);
console.log(age);`,
    task: 'Ism, yosh va sevimli texnologiyangiz uchun o‘zgaruvchilar yarating.',
    tip: 'Qiymati o‘zgarmaydigan ma’lumot uchun const ishlating.'
  },

  {
    id: 'js-data-types',
    module: 'javascript',
    order: 2,
    title: 'Ma’lumot turlari',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'JavaScript turli xil ma’lumotlar bilan ishlaydi. String, number, boolean, null va undefined asosiy turlardandir.',
    topics: ['string', 'number', 'boolean', 'null', 'undefined'],
    code: `const name = "Behruz";
const age = 15;
const student = true;
const empty = null;

console.log(typeof name);
console.log(typeof age);`,
    task: 'Har xil data type ishlatib beshta o‘zgaruvchi yarating.',
    tip: 'typeof operatori qiymat turini tekshirishga yordam beradi.'
  },

  {
    id: 'js-operators',
    module: 'javascript',
    order: 3,
    title: 'Operatorlar',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'Operatorlar qiymatlar ustida hisoblash, solishtirish va mantiqiy amallar bajarish uchun ishlatiladi.',
    topics: ['+', '-', '*', '/', '===', '&&', '||'],
    code: `const a = 10;
const b = 5;

console.log(a + b);
console.log(a * b);
console.log(a === b);`,
    task: 'Ikki son bilan asosiy matematik amallarni bajaring.',
    tip: '=== qiymat va type ikkalasini ham tekshiradi.'
  },

  {
    id: 'js-conditionals',
    module: 'javascript',
    order: 4,
    title: 'if va else',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'Shart operatorlari dasturga vaziyatga qarab turli qarorlar qabul qilish imkonini beradi.',
    topics: ['if', 'else', 'condition', 'comparison'],
    code: `const age = 18;

if (age >= 18) {
  console.log("Kirish mumkin");
} else {
  console.log("Hali erta");
}`,
    task: 'Ballga qarab "O‘tdi" yoki "Yiqildi" chiqaradigan kod yozing.',
    tip: 'Shartni aniq yozish keyingi kodni soddalashtiradi.'
  },

  {
    id: 'js-switch',
    module: 'javascript',
    order: 5,
    title: 'switch',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'switch bir qiymatning bir nechta ehtimoliy holatlarini tekshirish uchun ishlatiladi.',
    topics: ['switch', 'case', 'break', 'default'],
    code: `const day = 1;

switch (day) {
  case 1:
    console.log("Dushanba");
    break;

  case 2:
    console.log("Seshanba");
    break;

  default:
    console.log("Noma’lum kun");
}`,
    task: 'Hafta kunlarini switch yordamida aniqlang.',
    tip: 'case tugagach break ishlatish ko‘pincha kerak bo‘ladi.'
  },

  {
    id: 'js-functions',
    module: 'javascript',
    order: 6,
    title: 'Funksiyalar',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Funksiya ma’lum bir vazifani bajaradigan qayta ishlatiladigan kod blokidir.',
    topics: ['function', 'parameter', 'return', 'call'],
    code: `function greet(name) {
  return "Salom, " + name;
}

console.log(greet("Behruz"));`,
    task: 'Ikki sonni qabul qilib, ularning yig‘indisini qaytaradigan funksiya yozing.',
    tip: 'Bir xil kodni ko‘p marta yozmaslik uchun funksiyalardan foydalaning.'
  },

  {
    id: 'js-arrow-functions',
    module: 'javascript',
    order: 7,
    title: 'Arrow function',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Arrow function funksiyalarni qisqaroq sintaksisda yozish imkonini beradi.',
    topics: ['arrow function', 'parameters', 'return'],
    code: `const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));`,
    task: 'Sonning kvadratini qaytaradigan arrow function yarating.',
    tip: 'Bitta expression bo‘lsa returnni qisqartirish mumkin.'
  },

  {
    id: 'js-arrays',
    module: 'javascript',
    order: 8,
    title: 'Arraylar',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Array bir nechta qiymatni bitta kolleksiya sifatida saqlash imkonini beradi.',
    topics: ['array', 'index', 'length', 'push'],
    code: `const fruits = [
  "Apple",
  "Banana",
  "Orange"
];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("Mango");`,
    task: 'Sevimli texnologiyalaringizdan iborat array yarating.',
    tip: 'Array indexi 0 dan boshlanadi.'
  },

  {
    id: 'js-map',
    module: 'javascript',
    order: 9,
    title: 'map()',
    time: 25,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'map arraydagi har bir elementni o‘zgartirib, yangi array qaytaradi.',
    topics: ['map', 'callback', 'array'],
    code: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map(
  number => number * 2
);

console.log(doubled);`,
    task: 'Mahsulotlar arrayidagi narxlarni 10 foizga oshiradigan map yozing.',
    tip: 'map original arrayni odatda o‘zgartirmaydi.'
  },

  {
    id: 'js-filter',
    module: 'javascript',
    order: 10,
    title: 'filter()',
    time: 25,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'filter shartga mos keladigan elementlardan yangi array yaratadi.',
    topics: ['filter', 'condition', 'array'],
    code: `const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(
  number => number % 2 === 0
);

console.log(even);`,
    task: '20 dan katta mahsulotlarni filter yordamida ajrating.',
    tip: 'Callback true qaytarsa element yangi arrayga kiradi.'
  },

  {
    id: 'js-find',
    module: 'javascript',
    order: 11,
    title: 'find()',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'find shartga mos keladigan birinchi elementni topadi.',
    topics: ['find', 'callback', 'search'],
    code: `const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" }
];

const user = users.find(
  user => user.id === 2
);

console.log(user);`,
    task: 'ID orqali mahsulot topadigan find funksiyasini yozing.',
    tip: 'find array emas, topilgan bitta elementni qaytaradi.'
  },

  {
    id: 'js-reduce',
    module: 'javascript',
    order: 12,
    title: 'reduce()',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'reduce arraydagi barcha qiymatlarni bitta natijaga yig‘ish uchun ishlatiladi.',
    topics: ['reduce', 'accumulator', 'array'],
    code: `const prices = [100, 200, 300];

const total = prices.reduce(
  (sum, price) => sum + price,
  0
);

console.log(total);`,
    task: 'Savatchadagi mahsulotlar narxining umumiy summasini hisoblang.',
    tip: 'Accumulator oldingi hisoblangan natijani saqlaydi.'
  },

  {
    id: 'js-objects',
    module: 'javascript',
    order: 13,
    title: 'Objectlar',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Object bog‘langan ma’lumotlarni key-value ko‘rinishida saqlaydi.',
    topics: ['object', 'property', 'key', 'value'],
    code: `const user = {
  name: "Behruz",
  age: 15,
  role: "Developer"
};

console.log(user.name);
console.log(user.role);`,
    task: 'Bitta mahsulotni object sifatida yarating.',
    tip: 'Object real dunyodagi obyektlarni tasvirlashda juda qulay.'
  },

  {
    id: 'js-destructuring',
    module: 'javascript',
    order: 14,
    title: 'Destructuring',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Destructuring object yoki array ichidagi qiymatlarni alohida o‘zgaruvchilarga olishni osonlashtiradi.',
    topics: ['destructuring', 'object', 'array'],
    code: `const user = {
  name: "Behruz",
  age: 15
};

const { name, age } = user;

console.log(name);
console.log(age);`,
    task: 'Mahsulot objectidan name va price qiymatlarini destructuring qiling.',
    tip: 'React kodida destructuring juda ko‘p uchraydi.'
  },

  {
    id: 'js-spread',
    module: 'javascript',
    order: 15,
    title: 'Spread operator',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Spread operator array yoki object qiymatlarini boshqa array yoki object ichiga yoyish imkonini beradi.',
    topics: ['spread', 'array', 'object'],
    code: `const first = [1, 2];
const second = [3, 4];

const all = [...first, ...second];

console.log(all);`,
    task: 'Ikki mahsulot arrayini spread yordamida birlashtiring.',
    tip: 'Spread React state bilan ishlaganda ham juda muhim.'
  },

  {
    id: 'js-dom',
    module: 'javascript',
    order: 16,
    title: 'DOM bilan ishlash',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'DOM JavaScript orqali HTML elementlarini topish va o‘zgartirish imkonini beradi.',
    topics: ['DOM', 'document', 'querySelector', 'textContent'],
    code: `const title = document.querySelector("h1");

title.textContent = "Salom JavaScript";`,
    task: 'HTMLdagi h1 elementini JavaScript orqali o‘zgartiring.',
    tip: 'querySelector CSS selectorlaridan foydalanadi.'
  },

  {
    id: 'js-events',
    module: 'javascript',
    order: 17,
    title: 'Eventlar',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Eventlar foydalanuvchi harakatlarini aniqlashga yordam beradi. Masalan click, input va submit.',
    topics: ['event', 'click', 'input', 'addEventListener'],
    code: `const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button bosildi");
});`,
    task: 'Button bosilganda ekranga xabar chiqaradigan event yozing.',
    tip: 'addEventListener eventni kuzatish uchun ishlatiladi.'
  },

  {
    id: 'js-async',
    module: 'javascript',
    order: 18,
    title: 'Async va await',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'async va await Promise bilan ishlaydigan asinxron kodni tushunarliroq yozishga yordam beradi.',
    topics: ['Promise', 'async', 'await', 'fetch'],
    code: `async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();

  console.log(data);
}

getData();`,
    task: 'API dan ma’lumot olib console ichida chiqaring.',
    tip: 'await faqat async function ichida ishlatiladi.'
  },

  // =========================================================
  // 03 · REACT + VITE — 16 LESSONS
  // =========================================================

  {
    id: 'react-01',
    module: 'react',
    order: 1,
    title: 'React nima?',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'React foydalanuvchi interfeyslarini componentlar yordamida yaratishga imkon beradigan JavaScript kutubxonasidir.',
    topics: ['React', 'component', 'UI', 'JavaScript'],
    code: `import React from "react";

function App() {
  return <h1>Salom React!</h1>;
}

export default App;`,
    task: 'Birinchi React componentingizni yarating.',
    tip: 'Reactda UI kichik va qayta ishlatiladigan componentlarga bo‘linadi.'
  },

  {
    id: 'react-02',
    module: 'react',
    order: 2,
    title: 'Vite loyiha yaratish',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'Vite React loyihalarini tez ishga tushirish va development server bilan ishlash uchun ishlatiladi.',
    topics: ['Vite', 'npm', 'React', 'development server'],
    code: `npm create vite@latest my-app
cd my-app
npm install
npm run dev`,
    task: 'Vite yordamida yangi React loyiha yarating.',
    tip: 'npm installdan keyin npm run dev orqali serverni ishga tushiring.'
  },

  {
    id: 'react-03',
    module: 'react',
    order: 3,
    title: 'JSX',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'JSX JavaScript ichida HTMLga o‘xshash sintaksis yordamida UI yozish imkonini beradi.',
    topics: ['JSX', 'return', 'className'],
    code: `function Card() {
  return (
    <div className="card">
      <h2>VOTTO</h2>
      <p>React darsi</p>
    </div>
  );
}`,
    task: 'Title va descriptiondan iborat Card component yarating.',
    tip: 'JSXda class o‘rniga className ishlatiladi.'
  },

  {
    id: 'react-04',
    module: 'react',
    order: 4,
    title: 'Componentlar',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Component mustaqil UI bo‘lagi bo‘lib, uni boshqa joylarda qayta ishlatish mumkin.',
    topics: ['component', 'function', 'reuse'],
    code: `function Header() {
  return <header>VOTTO Academy</header>;
}

function App() {
  return (
    <>
      <Header />
      <main>Asosiy qism</main>
    </>
  );
}`,
    task: 'Header va Footer componentlarini alohida yarating.',
    tip: 'Component nomini katta harf bilan boshlang.'
  },

  {
    id: 'react-05',
    module: 'react',
    order: 5,
    title: 'Props',
    time: 25,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Props parent componentdan child componentga ma’lumot uzatish uchun ishlatiladi.',
    topics: ['props', 'parent', 'child'],
    code: `function User({ name }) {
  return <h2>{name}</h2>;
}

function App() {
  return <User name="Behruz" />;
}`,
    task: 'Product componentiga name va price propslarini yuboring.',
    tip: 'Propsni child component ichida o‘zgartirmang.'
  },

  {
    id: 'react-06',
    module: 'react',
    order: 6,
    title: 'Array va map()',
    time: 25,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Reactda array ma’lumotlarini map yordamida UI elementlariga aylantirish juda keng tarqalgan.',
    topics: ['map', 'array', 'JSX', 'key'],
    code: `const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" }
];

function App() {
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}`,
    task: 'Mahsulotlar arrayini cardlar ko‘rinishida chiqaring.',
    tip: 'map orqali yaratilgan elementlarga key bering.'
  },

  {
    id: 'react-07',
    module: 'react',
    order: 7,
    title: 'useState',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'useState component ichida o‘zgaradigan ma’lumotni saqlash va UI ni yangilash uchun ishlatiladi.',
    topics: ['useState', 'state', 'setter'],
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
    task: 'Increase va decrease buttonlari bilan counter yarating.',
    tip: 'State o‘zgarganda component qayta render bo‘ladi.'
  },

  {
    id: 'react-08',
    module: 'react',
    order: 8,
    title: 'Eventlar Reactda',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'React event handlerlar orqali foydalanuvchi harakatlariga javob qaytaradi.',
    topics: ['onClick', 'onChange', 'event'],
    code: `function Button() {
  const handleClick = () => {
    alert("Salom!");
  };

  return (
    <button onClick={handleClick}>
      Bosish
    </button>
  );
}`,
    task: 'Button bosilganda state o‘zgaradigan component yarating.',
    tip: 'onClick ichiga function beriladi.'
  },

  {
    id: 'react-09',
    module: 'react',
    order: 9,
    title: 'Input va formalar',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'React input qiymatini state orqali boshqarish controlled component deyiladi.',
    topics: ['input', 'form', 'onChange', 'value'],
    code: `const [name, setName] = useState("");

<input
  value={name}
  onChange={e => setName(e.target.value)}
/>`,
    task: 'Ism kiritish uchun controlled input yarating.',
    tip: 'Input value va state bir-biriga bog‘langan bo‘ladi.'
  },

  {
    id: 'react-10',
    module: 'react',
    order: 10,
    title: 'useEffect',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'useEffect component renderidan tashqari bajarilishi kerak bo‘lgan side effectlar bilan ishlashga yordam beradi.',
    topics: ['useEffect', 'effect', 'dependency'],
    code: `import { useEffect } from "react";

useEffect(() => {
  console.log("Component ishga tushdi");
}, []);`,
    task: 'Component ochilganda console ga xabar chiqaradigan effect yozing.',
    tip: 'Bo‘sh dependency array effectni mount vaqtida ishga tushiradi.'
  },

  {
    id: 'react-11',
    module: 'react',
    order: 11,
    title: 'React Router',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'React Router SPA ichida sahifalar o‘rtasida navigation yaratish imkonini beradi.',
    topics: ['Router', 'Route', 'Link', 'navigation'],
    code: `import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}`,
    task: 'Home, About va Contact sahifalarini router orqali bog‘lang.',
    tip: 'Oddiy a o‘rniga SPA navigation uchun Link ishlatish qulay.'
  },

  {
    id: 'react-12',
    module: 'react',
    order: 12,
    title: 'Context API',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Context ko‘plab componentlarga umumiy ma’lumotni props drilling qilmasdan yetkazish imkonini beradi.',
    topics: ['Context', 'Provider', 'useContext'],
    code: `import { createContext, useContext } from "react";

const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider value={{ name: "VOTTO" }}>
      <Child />
    </AppContext.Provider>
  );
}

function Child() {
  const data = useContext(AppContext);

  return <h1>{data.name}</h1>;
}`,
    task: 'Theme yoki user ma’lumotlari uchun Context yarating.',
    tip: 'Context globalga o‘xshash umumiy state uchun foydali.'
  },

  {
    id: 'react-13',
    module: 'react',
    order: 13,
    title: 'Custom Hook',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Custom Hook bir xil React logicni bir nechta componentda qayta ishlatishga yordam beradi.',
    topics: ['custom hook', 'useState', 'reuse'],
    code: `import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(c => c + 1);
  };

  return { count, increase };
}`,
    task: 'Counter uchun o‘z custom hookingizni yarating.',
    tip: 'Custom Hook nomi use bilan boshlanishi kerak.'
  },

  {
    id: 'react-14',
    module: 'react',
    order: 14,
    title: 'Loading va Error state',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'API bilan ishlaydigan UI loading, success va error holatlarini boshqarishi kerak.',
    topics: ['loading', 'error', 'success', 'state'],
    code: `if (loading) {
  return <p>Yuklanmoqda...</p>;
}

if (error) {
  return <p>Xatolik yuz berdi.</p>;
}

return <ProductList data={data} />;`,
    task: 'API sahifasiga loading va error holatlarini qo‘shing.',
    tip: 'Foydalanuvchiga tizim nima qilayotganini ko‘rsatish muhim.'
  },

  {
    id: 'react-15',
    module: 'react',
    order: 15,
    title: 'API dan ma’lumot olish',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'React frontend API orqali backenddan JSON ma’lumot olib, uni UI ko‘rinishida chiqarishi mumkin.',
    topics: ['fetch', 'API', 'JSON', 'useEffect'],
    code: `useEffect(() => {
  async function loadProducts() {
    const response = await fetch("/api/products");
    const data = await response.json();

    setProducts(data);
  }

  loadProducts();
}, []);`,
    task: 'API dan products olib cardlar ko‘rinishida chiqaring.',
    tip: 'Backend JSON yuboradi, frontend esa uni render qiladi.'
  },

  {
    id: 'react-16',
    module: 'react',
    order: 16,
    title: 'React loyiha arxitekturasi',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Katta React loyihalarida component, page, data, store va utility fayllarini tartibli joylashtirish muhim.',
    topics: ['components', 'pages', 'data', 'store'],
    code: `src/
  components/
  pages/
  data/
  store/
  App.jsx
  main.jsx`,
    task: 'O‘zingizning React loyihangiz uchun tartibli folder structure yarating.',
    tip: 'Yaxshi structure keyinchalik kodni boshqarishni osonlashtiradi.'
  },

  // =========================================================
  // 04 · NEXT.JS — 14 LESSONS
  // =========================================================

  {
    id: 'next-01',
    module: 'nextjs',
    order: 1,
    title: 'Next.js nima?',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Next.js React asosidagi framework bo‘lib, routing, rendering va production imkoniyatlarini taqdim etadi.',
    topics: ['Next.js', 'React', 'framework'],
    code: `npx create-next-app@latest my-app
cd my-app
npm run dev`,
    task: 'Next.js loyiha yarating va development serverni ishga tushiring.',
    tip: 'Next.js React ustiga qo‘shimcha imkoniyatlar beradi.'
  },

  {
    id: 'next-02',
    module: 'nextjs',
    order: 2,
    title: 'App Router',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Next.js App Router app papkasidagi folderlar orqali sahifalar yaratishga imkon beradi.',
    topics: ['App Router', 'app', 'page.jsx'],
    code: `app/
  page.jsx
  about/
    page.jsx`,
    task: 'Home va About sahifalarini App Router yordamida yarating.',
    tip: 'Har bir route uchun page.jsx ishlatiladi.'
  },

  {
    id: 'next-03',
    module: 'nextjs',
    order: 3,
    title: 'Layout',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'layout.jsx bir nechta sahifalar uchun umumiy UI yaratishga yordam beradi.',
    topics: ['layout', 'children', 'shared UI'],
    code: `export default function Layout({ children }) {
  return (
    <>
      <header>VOTTO</header>
      <main>{children}</main>
    </>
  );
}`,
    task: 'Umumiy Header va Footer joylashgan layout yarating.',
    tip: 'Layout navigation kabi umumiy qismlar uchun juda qulay.'
  },

  {
    id: 'next-04',
    module: 'nextjs',
    order: 4,
    title: 'Server Components',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Next.js App Router server componentlardan foydalanib, ayrim kodlarni serverda bajarishga imkon beradi.',
    topics: ['Server Component', 'server', 'rendering'],
    code: `export default async function Page() {
  const response = await fetch(
    "https://example.com/api"
  );

  const data = await response.json();

  return <pre>{JSON.stringify(data)}</pre>;
}`,
    task: 'Server component orqali ma’lumot olishni sinab ko‘ring.',
    tip: 'Client interaktivligi kerak bo‘lmasa server component foydali.'
  },

  {
    id: 'next-05',
    module: 'nextjs',
    order: 5,
    title: 'Client Components',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Interaktivlik va browser API kerak bo‘lgan componentlar client component sifatida belgilanadi.',
    topics: ['use client', 'state', 'events'],
    code: `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
    task: 'useState ishlatadigan Client Component yarating.',
    tip: 'useState va onClick kabi browser interaktivligi client component talab qiladi.'
  },

  {
    id: 'next-06',
    module: 'nextjs',
    order: 6,
    title: 'Dynamic Routes',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Dynamic route yordamida ID yoki boshqa parametr asosida turli sahifalarni yaratish mumkin.',
    topics: ['dynamic route', '[id]', 'params'],
    code: `app/
  products/
    [id]/
      page.jsx`,
    task: 'products/[id] route yaratib, mahsulot ID sini oling.',
    tip: 'Dynamic route square brackets bilan yoziladi.'
  },

  {
    id: 'next-07',
    module: 'nextjs',
    order: 7,
    title: 'Metadata',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Metadata sahifaning title va description kabi SEO ma’lumotlarini boshqarishga yordam beradi.',
    topics: ['metadata', 'title', 'description', 'SEO'],
    code: `export const metadata = {
  title: "VOTTO Academy",
  description: "Full-stack learning platform"
};`,
    task: 'Loyihangiz uchun title va description metadata yozing.',
    tip: 'Har bir muhim sahifa uchun mos title foydali.'
  },

  {
    id: 'next-08',
    module: 'nextjs',
    order: 8,
    title: 'next/image',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Next Image rasmlarni optimallashtirish va responsive ko‘rsatish uchun ishlatiladi.',
    topics: ['Image', 'optimization', 'responsive'],
    code: `import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={700}
/>`,
    task: 'Next.js sahifangizga optimallashtirilgan rasm qo‘shing.',
    tip: 'Rasm uchun mazmunli alt yozing.'
  },

  {
    id: 'next-09',
    module: 'nextjs',
    order: 9,
    title: 'API Routes',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Next.js route handlers yordamida server tomonida API endpointlar yaratish mumkin.',
    topics: ['Route Handler', 'GET', 'POST', 'API'],
    code: `export async function GET() {
  return Response.json({
    message: "Hello API"
  });
}`,
    task: 'GET endpoint yarating va JSON qaytaring.',
    tip: 'Frontend API endpointdan JSON olib foydalanishi mumkin.'
  },

  {
    id: 'next-10',
    module: 'nextjs',
    order: 10,
    title: 'Loading UI',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'loading.jsx foydalanuvchiga server ma’lumoti yuklanayotgan paytda loading UI ko‘rsatishga yordam beradi.',
    topics: ['loading.jsx', 'loading UI', 'UX'],
    code: `export default function Loading() {
  return <p>Yuklanmoqda...</p>;
}`,
    task: 'Bir route uchun loading UI yarating.',
    tip: 'Loading holati foydalanuvchi tajribasini yaxshilaydi.'
  },

  {
    id: 'next-11',
    module: 'nextjs',
    order: 11,
    title: 'Error UI',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'error.jsx route ichidagi xatolarni foydalanuvchiga tushunarli UI orqali ko‘rsatishga yordam beradi.',
    topics: ['error.jsx', 'error handling', 'reset'],
    code: `"use client";

export default function Error({ reset }) {
  return (
    <button onClick={() => reset()}>
      Qayta urinish
    </button>
  );
}`,
    task: 'Xatolik uchun alohida UI yarating.',
    tip: 'Texnik errorni foydalanuvchiga oddiy tilda tushuntiring.'
  },

  {
    id: 'next-12',
    module: 'nextjs',
    order: 12,
    title: 'Static va Dynamic Rendering',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Next.js sahifalarni turli rendering strategiyalari orqali tayyorlash imkonini beradi.',
    topics: ['static', 'dynamic', 'rendering'],
    code: `export default async function Page() {
  const data = await getData();

  return <div>{data.title}</div>;
}`,
    task: 'Statik ma’lumotli sahifa va dinamik ma’lumotli sahifani solishtiring.',
    tip: 'Rendering strategiyasini sahifa ehtiyojiga qarab tanlang.'
  },

  {
    id: 'next-13',
    module: 'nextjs',
    order: 13,
    title: 'Environment Variables',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Environment variablelar API URL kabi konfiguratsiyani koddan ajratish uchun ishlatiladi.',
    topics: ['.env', 'environment', 'configuration'],
    code: `NEXT_PUBLIC_API_URL=https://api.example.com

const url = process.env.NEXT_PUBLIC_API_URL;`,
    task: 'API URL uchun environment variable yarating.',
    tip: 'Maxfiy qiymatlarni public variable sifatida saqlamang.'
  },

  {
    id: 'next-14',
    module: 'nextjs',
    order: 14,
    title: 'Next.js loyiha tuzilmasi',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Next.js loyihasida app, components, lib va public papkalarini tartibli tashkil qilish katta loyihalarda muhim.',
    topics: ['app', 'components', 'lib', 'public'],
    code: `src/
  app/
  components/
  lib/
  data/
public/`,
    task: 'Next.js loyihangiz uchun tartibli architecture yarating.',
    tip: 'Folder structure jamoaviy developmentni ham osonlashtiradi.'
  },

  // =========================================================
  // 05 · BACKEND — 20 LESSONS
  // =========================================================

  {
    id: 'backend-01',
    module: 'backend',
    order: 1,
    title: 'Backend nima?',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'Backend serverda ishlaydigan qism bo‘lib, ma’lumotlar, biznes logika va API larni boshqaradi.',
    topics: ['backend', 'server', 'API', 'database'],
    code: `Frontend
   ↓
Backend API
   ↓
Database`,
    task: 'Frontend va backend o‘rtasidagi aloqa sxemasini tushuntiring.',
    tip: 'Backend foydalanuvchiga ko‘rinmaydigan asosiy logikani boshqaradi.'
  },

  {
    id: 'backend-02',
    module: 'backend',
    order: 2,
    title: 'Node.js',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Node.js JavaScriptni browserdan tashqarida, server muhitida ishlatish imkonini beradi.',
    topics: ['Node.js', 'runtime', 'JavaScript'],
    code: `console.log("Node.js ishlayapti");`,
    task: 'Node.js fayl yarating va uni terminaldan ishga tushiring.',
    tip: 'Node.js JavaScript engine asosida ishlaydi.'
  },

  {
    id: 'backend-03',
    module: 'backend',
    order: 3,
    title: 'npm',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'npm JavaScript paketlarini o‘rnatish va loyihani boshqarish uchun ishlatiladi.',
    topics: ['npm', 'package.json', 'dependency'],
    code: `npm init -y
npm install express`,
    task: 'Yangi Node.js loyiha yarating va express o‘rnating.',
    tip: 'package.json loyihaning dependency va scriptlarini saqlaydi.'
  },

  {
    id: 'backend-04',
    module: 'backend',
    order: 4,
    title: 'Express.js',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Express Node.js uchun web server va API yaratishni soddalashtiradigan frameworkdir.',
    topics: ['Express', 'server', 'middleware'],
    code: `import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server 3000 portda");
});`,
    task: '3000 portda ishlaydigan Express server yarating.',
    tip: 'Express bilan route va middleware yaratish juda qulay.'
  },

  {
    id: 'backend-05',
    module: 'backend',
    order: 5,
    title: 'HTTP va request',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'HTTP client va server o‘rtasidagi ma’lumot almashinuv qoidalarini belgilaydi.',
    topics: ['HTTP', 'request', 'response', 'client'],
    code: `GET /api/products
POST /api/products
PATCH /api/products/1
DELETE /api/products/1`,
    task: 'GET, POST, PATCH va DELETE vazifalarini tushuntiring.',
    tip: 'HTTP method endpointning nima qilayotganini bildiradi.'
  },

  {
    id: 'backend-06',
    module: 'backend',
    order: 6,
    title: 'GET route',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'GET route odatda serverdan ma’lumot olish uchun ishlatiladi.',
    topics: ['GET', 'route', 'response'],
    code: `app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Keyboard" }
  ]);
});`,
    task: 'GET /api/products endpoint yarating.',
    tip: 'JSON API frontend uchun qulay ma’lumot formatidir.'
  },

  {
    id: 'backend-07',
    module: 'backend',
    order: 7,
    title: 'POST route',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'POST yangi ma’lumot yaratish uchun ishlatiladi.',
    topics: ['POST', 'body', 'create'],
    code: `app.use(express.json());

app.post("/api/products", (req, res) => {
  console.log(req.body);

  res.status(201).json(req.body);
});`,
    task: 'POST orqali yangi product qabul qiladigan route yarating.',
    tip: 'req.body olishdan oldin express.json() middleware kerak.'
  },

  {
    id: 'backend-08',
    module: 'backend',
    order: 8,
    title: 'PATCH route',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'PATCH mavjud ma’lumotning ayrim qismlarini yangilash uchun ishlatiladi.',
    topics: ['PATCH', 'update', 'params'],
    code: `app.patch("/api/products/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Product updated",
    id
  });
});`,
    task: 'Productni ID orqali yangilaydigan PATCH route yarating.',
    tip: 'URL parametrini req.params orqali olasiz.'
  },

  {
    id: 'backend-09',
    module: 'backend',
    order: 9,
    title: 'DELETE route',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'DELETE endpoint ma’lumotni o‘chirish uchun ishlatiladi.',
    topics: ['DELETE', 'params', 'remove'],
    code: `app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Product deleted",
    id
  });
});`,
    task: 'ID orqali product o‘chiradigan DELETE route yarating.',
    tip: 'Delete operatsiyasida ID ni tekshirish muhim.'
  },

  {
    id: 'backend-10',
    module: 'backend',
    order: 10,
    title: 'Middleware',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Middleware request routega yetib borishidan oldin yoki undan keyin ishlaydigan funksiyadir.',
    topics: ['middleware', 'req', 'res', 'next'],
    code: `function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(logger);`,
    task: 'Har bir requestni terminalga chiqaradigan logger middleware yozing.',
    tip: 'next() keyingi middleware yoki routega o‘tishga imkon beradi.'
  },

  {
    id: 'backend-11',
    module: 'backend',
    order: 11,
    title: 'Router',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Express Router route larni alohida fayllarga ajratib, katta backendni tartibli saqlashga yordam beradi.',
    topics: ['Router', 'routes', 'modularization'],
    code: `import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([]);
});

export default router;`,
    task: 'Products uchun alohida router fayl yarating.',
    tip: 'Katta loyihalarda route larni bo‘lib tashlash juda foydali.'
  },

  {
    id: 'backend-12',
    module: 'backend',
    order: 12,
    title: 'Status code',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'HTTP status code server javobining natijasini bildiradi.',
    topics: ['200', '201', '400', '404', '500'],
    code: `res.status(200).json(data);

res.status(201).json(data);

res.status(404).json({
  message: "Not found"
});`,
    task: 'Success va error response lar uchun mos status code ishlating.',
    tip: 'Status code frontendga request natijasini tushunishga yordam beradi.'
  },

  {
    id: 'backend-13',
    module: 'backend',
    order: 13,
    title: 'Query parameters',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Query parameterlar search, filter va sort kabi funksiyalar uchun ishlatiladi.',
    topics: ['query', 'search', 'filter'],
    code: `GET /api/products?search=phone

const { search } = req.query;

console.log(search);`,
    task: 'Productlarni search query orqali qidiradigan endpoint yarating.',
    tip: 'req.query URL dagi query parameterlarni beradi.'
  },

  {
    id: 'backend-14',
    module: 'backend',
    order: 14,
    title: 'CORS',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'CORS turli originlar orasidagi browser requestlarini boshqarishga yordam beradi.',
    topics: ['CORS', 'origin', 'frontend', 'backend'],
    code: `import cors from "cors";

app.use(cors());`,
    task: 'Express serverga CORS middleware qo‘shing.',
    tip: 'Frontend va backend turli portlarda ishlaganda CORS muhim bo‘lishi mumkin.'
  },

  {
    id: 'backend-15',
    module: 'backend',
    order: 15,
    title: 'Postman bilan API test',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Postman API endpointlarni frontend yaratmasdan turib test qilish imkonini beradi.',
    topics: ['Postman', 'API testing', 'request'],
    code: `GET http://localhost:3000/api/products

POST http://localhost:3000/api/products`,
    task: 'GET va POST endpointlaringizni Postman orqali test qiling.',
    tip: 'Backendni frontenddan oldin Postman bilan tekshirish juda foydali.'
  },

  {
    id: 'backend-16',
    module: 'backend',
    order: 16,
    title: 'CRUD',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'CRUD Create, Read, Update va Delete operatsiyalarining umumiy nomidir.',
    topics: ['Create', 'Read', 'Update', 'Delete'],
    code: `POST   /products
GET    /products
PATCH  /products/:id
DELETE /products/:id`,
    task: 'Products uchun to‘liq CRUD API yarating.',
    tip: 'CRUD backend loyihalarning eng asosiy patternlaridan biridir.'
  },

  {
    id: 'backend-17',
    module: 'backend',
    order: 17,
    title: 'Error handling',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Error handling serverdagi xatolarni markazlashgan va tushunarli tarzda boshqarishga yordam beradi.',
    topics: ['error', 'try/catch', 'middleware'],
    code: `app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Server error"
  });
});`,
    task: 'Express uchun umumiy error middleware yarating.',
    tip: 'Foydalanuvchiga ichki texnik xatolarni oshkor qilmaslikka harakat qiling.'
  },

  {
    id: 'backend-18',
    module: 'backend',
    order: 18,
    title: 'Environment variables',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Environment variablelar port, database URL va boshqa konfiguratsiyalarni koddan ajratadi.',
    topics: ['.env', 'PORT', 'configuration'],
    code: `PORT=3000
DATABASE_URL=your_database_url`,
    task: 'PORT qiymatini .env fayliga ko‘chiring.',
    tip: '.env faylini GitHubga tasodifan yuklamang.'
  },

  {
    id: 'backend-19',
    module: 'backend',
    order: 19,
    title: 'API architecture',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Backendni routes, controllers, models va middleware qismlariga ajratish kodni boshqarishni osonlashtiradi.',
    topics: ['routes', 'controllers', 'models', 'middleware'],
    code: `src/
  routes/
  controllers/
  models/
  middleware/
  server.js`,
    task: 'Backend loyihangizni modular architecturega ajrating.',
    tip: 'Har bir faylga bitta aniq vazifa berishga harakat qiling.'
  },

  {
    id: 'backend-20',
    module: 'backend',
    order: 20,
    title: 'Frontend + Backend',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Frontend backend API ga request yuboradi, backend esa ma’lumotni JSON ko‘rinishida qaytaradi.',
    topics: ['fetch', 'API', 'JSON', 'full-stack'],
    code: `const response = await fetch(
  "http://localhost:3000/api/products"
);

const products = await response.json();

console.log(products);`,
    task: 'React frontendni Express API bilan ulang.',
    tip: 'Frontend UI, backend esa ma’lumot va biznes logikani boshqaradi.'
  },

  // =========================================================
  // 06 · MONGODB — 14 LESSONS
  // =========================================================

  {
    id: 'mongo-01',
    module: 'mongodb',
    order: 1,
    title: 'MongoDB nima?',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'MongoDB document-based NoSQL database bo‘lib, ma’lumotlarni BSON documentlar ko‘rinishida saqlaydi.',
    topics: ['MongoDB', 'NoSQL', 'document', 'database'],
    code: `{
  "name": "Keyboard",
  "price": 250000
}`,
    task: 'MongoDB va SQL database o‘rtasidagi asosiy farqni yozing.',
    tip: 'MongoDB documentlari JSONga o‘xshash ko‘rinadi.'
  },

  {
    id: 'mongo-02',
    module: 'mongodb',
    order: 2,
    title: 'Database va collection',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'MongoDB database ichida collectionlar, collection ichida esa documentlar saqlanadi.',
    topics: ['database', 'collection', 'document'],
    code: `Database
  └── products
       ├── document
       ├── document
       └── document`,
    task: 'Products collection strukturasini rejalashtiring.',
    tip: 'Collection SQLdagi tablega taxminan o‘xshash tushuncha.'
  },

  {
    id: 'mongo-03',
    module: 'mongodb',
    order: 3,
    title: 'MongoDB Atlas',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'MongoDB Atlas MongoDB database serverlarini cloud muhitida boshqarish imkonini beradi.',
    topics: ['Atlas', 'cloud', 'cluster'],
    code: `mongodb+srv://username:password@cluster.mongodb.net/app`,
    task: 'Atlasda test cluster va database yarating.',
    tip: 'Database credentialsni ochiq kodga yozmang.'
  },

  {
    id: 'mongo-04',
    module: 'mongodb',
    order: 4,
    title: 'Mongoose',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Mongoose Node.js va MongoDB o‘rtasida ishlashni qulaylashtiradigan ODM kutubxonasidir.',
    topics: ['Mongoose', 'ODM', 'Node.js'],
    code: `import mongoose from "mongoose";

await mongoose.connect(
  process.env.MONGO_URI
);`,
    task: 'Express loyihangizni MongoDBga ulang.',
    tip: 'Connection stringni environment variable orqali saqlang.'
  },

  {
    id: 'mongo-05',
    module: 'mongodb',
    order: 5,
    title: 'Schema',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Mongoose Schema documentlar qanday fieldlarga ega bo‘lishini belgilashga yordam beradi.',
    topics: ['Schema', 'field', 'type'],
    code: `const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String
});`,
    task: 'Product uchun Mongoose schema yarating.',
    tip: 'Schema orqali ma’lumot strukturasini aniqroq boshqarasiz.'
  },

  {
    id: 'mongo-06',
    module: 'mongodb',
    order: 6,
    title: 'Model',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Model schema asosida MongoDB collection bilan ishlash uchun interface beradi.',
    topics: ['Model', 'Schema', 'collection'],
    code: `const Product = mongoose.model(
  "Product",
  productSchema
);`,
    task: 'Product model yarating.',
    tip: 'CRUD operatsiyalarida modeldan foydalanasiz.'
  },

  {
    id: 'mongo-07',
    module: 'mongodb',
    order: 7,
    title: 'Create document',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Mongoose model orqali MongoDBga yangi document qo‘shish mumkin.',
    topics: ['create', 'save', 'document'],
    code: `const product = await Product.create({
  name: "Keyboard",
  price: 250000,
  brand: "Logitech"
});`,
    task: 'MongoDBga yangi product qo‘shing.',
    tip: 'create documentni yaratib saqlaydi.'
  },

  {
    id: 'mongo-08',
    module: 'mongodb',
    order: 8,
    title: 'Find documents',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'find va findOne MongoDBdan documentlarni olish uchun ishlatiladi.',
    topics: ['find', 'findOne', 'query'],
    code: `const products = await Product.find();

const product = await Product.findOne({
  brand: "Logitech"
});`,
    task: 'Barcha productlarni va bitta brand bo‘yicha productni toping.',
    tip: 'find arrayga o‘xshash natija qaytaradi.'
  },

  {
    id: 'mongo-09',
    module: 'mongodb',
    order: 9,
    title: 'Update document',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'MongoDB documentlarini updateOne yoki findByIdAndUpdate yordamida yangilash mumkin.',
    topics: ['update', 'findByIdAndUpdate'],
    code: `await Product.findByIdAndUpdate(
  id,
  { price: 300000 },
  { new: true }
);`,
    task: 'Product narxini ID orqali yangilang.',
    tip: 'new: true yangilangan documentni qaytarishga yordam beradi.'
  },

  {
    id: 'mongo-10',
    module: 'mongodb',
    order: 10,
    title: 'Delete document',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Documentni o‘chirish uchun deleteOne yoki findByIdAndDelete ishlatilishi mumkin.',
    topics: ['delete', 'remove', 'ID'],
    code: `await Product.findByIdAndDelete(id);`,
    task: 'ID orqali productni o‘chiradigan endpoint yarating.',
    tip: 'O‘chirishdan oldin ID mavjudligini tekshiring.'
  },

  {
    id: 'mongo-11',
    module: 'mongodb',
    order: 11,
    title: 'Validation',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Mongoose validation noto‘g‘ri yoki yetishmayotgan ma’lumotlarning databasega kirishini cheklashga yordam beradi.',
    topics: ['required', 'min', 'max', 'validation'],
    code: `const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  }
});`,
    task: 'Product schema uchun required va min validation qo‘shing.',
    tip: 'Validation backendda ham bajarilishi kerak.'
  },

  {
    id: 'mongo-12',
    module: 'mongodb',
    order: 12,
    title: 'MongoDB search',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'MongoDB querylari yordamida ma’lum field qiymatiga mos documentlarni topish mumkin.',
    topics: ['query', 'search', 'regex'],
    code: `const products = await Product.find({
  name: {
    $regex: "phone",
    $options: "i"
  }
});`,
    task: 'Product nomi bo‘yicha case-insensitive search yarating.',
    tip: 'Regex qidiruvni moslashuvchan qiladi.'
  },

  {
    id: 'mongo-13',
    module: 'mongodb',
    order: 13,
    title: 'Pagination',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Pagination katta ma’lumotlarni bir vaqtning o‘zida hammasini yubormasdan qismlarga ajratishga yordam beradi.',
    topics: ['limit', 'skip', 'pagination'],
    code: `const page = 1;
const limit = 10;

const products = await Product.find()
  .skip((page - 1) * limit)
  .limit(limit);`,
    task: 'Products endpointiga page va limit qo‘shing.',
    tip: 'Pagination katta collectionlar uchun muhim.'
  },

  {
    id: 'mongo-14',
    module: 'mongodb',
    order: 14,
    title: 'Express + MongoDB CRUD',
    time: 35,
    difficulty: 'O‘rta',
    xp: 35,
    description:
      'Bu darsda Express API, Mongoose model va MongoDB database yordamida to‘liq CRUD tizimi birlashtiriladi.',
    topics: ['Express', 'Mongoose', 'MongoDB', 'CRUD'],
    code: `GET    /api/products
POST   /api/products
PATCH  /api/products/:id
DELETE /api/products/:id`,
    task: 'Products uchun to‘liq MongoDB CRUD API yarating.',
    tip: 'Bu backenddan full-stack developmentga o‘tishdagi muhim bosqich.'
  },

  // =========================================================
  // 07 · FULL-STACK — 24 LESSONS
  // =========================================================

  {
    id: 'fullstack-01',
    module: 'full-stack',
    order: 1,
    title: 'Full-stack nima?',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'Full-stack dasturchi frontend, backend va database qismlari bilan ishlay oladi.',
    topics: ['frontend', 'backend', 'database'],
    code: `Frontend
   ↓
API / Backend
   ↓
Database`,
    task: 'Full-stack application qismlarini diagramma sifatida tushuntiring.',
    tip: 'Full-stack bo‘lish hamma narsani mukammal bilish degani emas.'
  },

  {
    id: 'fullstack-02',
    module: 'full-stack',
    order: 2,
    title: 'Frontendni APIga ulash',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'React frontend fetch orqali Express backendga request yuborishi mumkin.',
    topics: ['React', 'fetch', 'Express', 'JSON'],
    code: `const response = await fetch(
  "http://localhost:3000/api/products"
);

const data = await response.json();`,
    task: 'React products sahifasini Express APIga ulang.',
    tip: 'API response formatini oldindan kelishib oling.'
  },

  {
    id: 'fullstack-03',
    module: 'full-stack',
    order: 3,
    title: 'Product list',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Backenddan kelgan productlarni React map yordamida UI cardlariga aylantirish mumkin.',
    topics: ['map', 'API', 'card', 'products'],
    code: `{products.map(product => (
  <ProductCard
    key={product._id}
    product={product}
  />
))}`,
    task: 'API productlarini card gridda chiqaring.',
    tip: 'Har bir card uchun unique key ishlating.'
  },

  {
    id: 'fullstack-04',
    module: 'full-stack',
    order: 4,
    title: 'Product details',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Dynamic route orqali bitta productning batafsil ma’lumotlarini ko‘rsatish mumkin.',
    topics: ['dynamic route', 'ID', 'API'],
    code: `GET /api/products/:id`,
    task: 'Product detail sahifasini yarating.',
    tip: 'URLdagi ID backendga yuboriladi.'
  },

  {
    id: 'fullstack-05',
    module: 'full-stack',
    order: 5,
    title: 'Create product',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Admin forma orqali yangi product ma’lumotlarini backendga POST request bilan yuborish mumkin.',
    topics: ['POST', 'form', 'JSON'],
    code: `await fetch("/api/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
});`,
    task: 'Yangi product qo‘shish formasini yarating.',
    tip: 'Form ma’lumotini JSONga aylantirib yuboring.'
  },

  {
    id: 'fullstack-06',
    module: 'full-stack',
    order: 6,
    title: 'Update product',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Mavjud productni frontend forma orqali o‘zgartirib backendga yuborish mumkin.',
    topics: ['PATCH', 'form', 'update'],
    code: `await fetch(
  \`/api/products/\${id}\`,
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
);`,
    task: 'Product edit funksiyasini yarating.',
    tip: 'Faqat o‘zgargan fieldlarni yuborish mumkin.'
  },

  {
    id: 'fullstack-07',
    module: 'full-stack',
    order: 7,
    title: 'Delete product',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Frontend DELETE request yuborib backend orqali productni database dan o‘chirishi mumkin.',
    topics: ['DELETE', 'confirmation', 'state'],
    code: `await fetch(
  \`/api/products/\${id}\`,
  {
    method: "DELETE"
  }
);`,
    task: 'Admin panelga product delete funksiyasini qo‘shing.',
    tip: 'O‘chirishdan oldin confirmation ko‘rsatish foydali.'
  },

  {
    id: 'fullstack-08',
    module: 'full-stack',
    order: 8,
    title: 'Loading state',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'API request davomida foydalanuvchiga loading holatini ko‘rsatish kerak.',
    topics: ['loading', 'state', 'UX'],
    code: `const [loading, setLoading] = useState(false);

if (loading) {
  return <Loader />;
}`,
    task: 'Products sahifasiga loading state qo‘shing.',
    tip: 'Bo‘sh ekran foydalanuvchini chalkashtirishi mumkin.'
  },

  {
    id: 'fullstack-09',
    module: 'full-stack',
    order: 9,
    title: 'Error state',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'API ishlamasa yoki server xato qaytarsa frontend buni foydalanuvchiga tushunarli ko‘rsatishi kerak.',
    topics: ['error', 'try/catch', 'UX'],
    code: `try {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Request failed");
  }
} catch (error) {
  setError(error.message);
}`,
    task: 'API xatosi uchun error UI yarating.',
    tip: 'Texnik error o‘rniga oddiy tushuntirish bering.'
  },

  {
    id: 'fullstack-10',
    module: 'full-stack',
    order: 10,
    title: 'Search',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Frontend search qiymatini backend query parameter sifatida yuborib, kerakli ma’lumotlarni olishi mumkin.',
    topics: ['search', 'query', 'filter'],
    code: `fetch(
  \`/api/products?search=\${query}\`
);`,
    task: 'Product search funksiyasini yarating.',
    tip: 'Searchni backendga yuborish katta data uchun samaraliroq.'
  },

  {
    id: 'fullstack-11',
    module: 'full-stack',
    order: 11,
    title: 'Filter',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Filter foydalanuvchiga category, brand yoki price bo‘yicha kerakli productlarni tanlash imkonini beradi.',
    topics: ['filter', 'category', 'brand'],
    code: `GET /api/products?brand=Apple`,
    task: 'Brand bo‘yicha product filter yarating.',
    tip: 'Filter qiymatlarini URL query sifatida yuborish qulay.'
  },

  {
    id: 'fullstack-12',
    module: 'full-stack',
    order: 12,
    title: 'Sorting',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Sorting productlarni narx, nom yoki sana bo‘yicha tartiblash imkonini beradi.',
    topics: ['sort', 'price', 'query'],
    code: `GET /api/products?sort=price_asc`,
    task: 'Arzonidan qimmatiga sorting funksiyasini yarating.',
    tip: 'Sortingni backend yoki frontendda bajarish mumkin.'
  },

  {
    id: 'fullstack-13',
    module: 'full-stack',
    order: 13,
    title: 'Pagination UI',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Backend pagination bilan birgalikda frontend page navigation yaratishi mumkin.',
    topics: ['pagination', 'page', 'limit'],
    code: `GET /api/products?page=2&limit=10`,
    task: 'Previous va Next tugmalarini yarating.',
    tip: 'Current page state orqali boshqariladi.'
  },

  {
    id: 'fullstack-14',
    module: 'full-stack',
    order: 14,
    title: 'Authentication tushunchasi',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Authentication foydalanuvchining kimligini aniqlash jarayonidir.',
    topics: ['authentication', 'user', 'session'],
    code: `POST /api/auth/login

{
  "email": "user@example.com",
  "password": "..."
}`,
    task: 'Authentication jarayonini bosqichma-bosqich tushuntiring.',
    tip: 'Authentication va authorization bir xil narsa emas.'
  },

  {
    id: 'fullstack-15',
    module: 'full-stack',
    order: 15,
    title: 'Authorization',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Authorization foydalanuvchining qaysi amallarni bajarishga ruxsati borligini aniqlaydi.',
    topics: ['authorization', 'role', 'admin'],
    code: `if (user.role === "admin") {
  // admin action
}`,
    task: 'Admin va oddiy user rollarini rejalashtiring.',
    tip: 'Role tekshiruvlari backendda ham bajarilishi kerak.'
  },

  {
    id: 'fullstack-16',
    module: 'full-stack',
    order: 16,
    title: 'Cart logic',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Shopping cart productlarni vaqtincha saqlash, quantity va total hisoblash logikasini talab qiladi.',
    topics: ['cart', 'quantity', 'total', 'state'],
    code: `const total = cart.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
);`,
    task: 'Oddiy shopping cart state yarating.',
    tip: 'Cart item ichida product va quantity bo‘lishi mumkin.'
  },

  {
    id: 'fullstack-17',
    module: 'full-stack',
    order: 17,
    title: 'Wishlist',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Wishlist foydalanuvchi keyinroq ko‘rishni xohlagan productlarni saqlash imkonini beradi.',
    topics: ['wishlist', 'state', 'toggle'],
    code: `setWishlist(items =>
  items.includes(id)
    ? items.filter(item => item !== id)
    : [...items, id]
);`,
    task: 'Product uchun wishlist toggle yarating.',
    tip: 'Toggle logic add va remove amallarini birlashtiradi.'
  },

  {
    id: 'fullstack-18',
    module: 'full-stack',
    order: 18,
    title: 'LocalStorage',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'localStorage browserda kichik hajmdagi ma’lumotlarni saqlash imkonini beradi.',
    topics: ['localStorage', 'JSON.stringify', 'JSON.parse'],
    code: `localStorage.setItem(
  "cart",
  JSON.stringify(cart)
);

const saved = JSON.parse(
  localStorage.getItem("cart") || "[]"
);`,
    task: 'Cartni localStorage orqali saqlang.',
    tip: 'localStorage faqat browserdagi client-side data uchun mos.'
  },

  {
    id: 'fullstack-19',
    module: 'full-stack',
    order: 19,
    title: 'Environment configuration',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Full-stack loyihada frontend va backend konfiguratsiyalarini environment variablelar orqali boshqarish mumkin.',
    topics: ['.env', 'API URL', 'configuration'],
    code: `VITE_API_URL=http://localhost:3000`,
    task: 'Frontend API URLni environment variablega ko‘chiring.',
    tip: 'Development va production URLlari turlicha bo‘lishi mumkin.'
  },

  {
    id: 'fullstack-20',
    module: 'full-stack',
    order: 20,
    title: 'Project structure',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Full-stack loyihada frontend va backend kodlarini tartibli structureda saqlash muhim.',
    topics: ['frontend', 'backend', 'structure'],
    code: `project/
  frontend/
  backend/
  README.md`,
    task: 'Full-stack loyiha uchun folder structure yarating.',
    tip: 'Frontend va backendni mustaqil boshqarish qulay bo‘ladi.'
  },

  {
    id: 'fullstack-21',
    module: 'full-stack',
    order: 21,
    title: 'Deploymentga tayyorlash',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Deploymentdan oldin environment, build, API URL va production database sozlamalari tekshiriladi.',
    topics: ['build', 'production', 'environment'],
    code: `npm run build`,
    task: 'Frontend production buildini tekshiring.',
    tip: 'Deploydan oldin local production buildni sinab ko‘ring.'
  },

  {
    id: 'fullstack-22',
    module: 'full-stack',
    order: 22,
    title: 'Git va GitHub',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Git kod tarixini boshqaradi, GitHub esa repositoryni online saqlash va jamoa bilan ishlashga yordam beradi.',
    topics: ['Git', 'GitHub', 'commit', 'push'],
    code: `git init
git add .
git commit -m "Initial commit"
git push`,
    task: 'Loyihangizni GitHub repositoryga joylang.',
    tip: 'Har bir commit mazmunli bo‘lsin.'
  },

  {
    id: 'fullstack-23',
    module: 'full-stack',
    order: 23,
    title: 'Full-stack debugging',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Full-stack xatolarni frontend console, network tab, backend terminal va database orqali bosqichma-bosqich topish kerak.',
    topics: ['debugging', 'console', 'network', 'logs'],
    code: `console.log("Frontend");

console.log("Backend");

console.log("Database query");`,
    task: 'Bitta API xatosini frontenddan databasegacha tekshirib chiqing.',
    tip: 'Xatoni taxmin qilishdan ko‘ra request flowini tekshiring.'
  },

  {
    id: 'fullstack-24',
    module: 'full-stack',
    order: 24,
    title: 'Full-stack loyiha',
    time: 45,
    difficulty: 'Advanced',
    xp: 50,
    description:
      'Yakuniy loyihada React frontend, Express backend va MongoDB database birgalikda ishlaydi.',
    topics: ['React', 'Express', 'MongoDB', 'CRUD', 'deployment'],
    code: `React
  ↓
Express API
  ↓
MongoDB`,
    task: 'Products uchun to‘liq full-stack CRUD loyiha yarating.',
    tip: 'Kichikdan boshlang va funksiyalarni bosqichma-bosqich qo‘shing.'
  },

  // =========================================================
  // 08 · DEPLOYMENT — 10 LESSONS
  // =========================================================

  {
    id: 'deploy-01',
    module: 'deployment',
    order: 1,
    title: 'Deployment nima?',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 15,
    description:
      'Deployment loyihani local kompyuterdan internetdagi production muhitga chiqarish jarayonidir.',
    topics: ['deployment', 'production', 'hosting'],
    code: `Local
  ↓
Build
  ↓
Production`,
    task: 'Deployment jarayonini bosqichma-bosqich yozing.',
    tip: 'Local ishlashi productionda ham ishlaydi degani emas.'
  },

  {
    id: 'deploy-02',
    module: 'deployment',
    order: 2,
    title: 'Production build',
    time: 20,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Production build loyihaning optimallashtirilgan yakuniy versiyasini tayyorlaydi.',
    topics: ['build', 'production', 'optimization'],
    code: `npm run build`,
    task: 'Loyihangiz production buildini yarating.',
    tip: 'Build vaqtida xatolarni tuzatmasdan deploy qilmang.'
  },

  {
    id: 'deploy-03',
    module: 'deployment',
    order: 3,
    title: 'Vercel',
    time: 25,
    difficulty: 'Boshlang‘ich',
    xp: 20,
    description:
      'Vercel frontend va Next.js loyihalarini internetga chiqarish uchun mashhur deployment platformasidir.',
    topics: ['Vercel', 'deploy', 'Next.js'],
    code: `npm run build`,
    task: 'Frontend loyihangizni Vercelga deploy qilish jarayonini o‘rganing.',
    tip: 'GitHub repository orqali avtomatik deployment qilish mumkin.'
  },

  {
    id: 'deploy-04',
    module: 'deployment',
    order: 4,
    title: 'Environment Variables',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Production serverda API URL va database credentials kabi konfiguratsiyalar environment variable sifatida beriladi.',
    topics: ['environment', 'production', 'secret'],
    code: `DATABASE_URL=...
API_URL=...`,
    task: 'Production uchun kerakli environment variablelarni ro‘yxat qiling.',
    tip: 'Secretlarni frontend kodiga joylashtirmang.'
  },

  {
    id: 'deploy-05',
    module: 'deployment',
    order: 5,
    title: 'Backend deployment',
    time: 30,
    difficulty: 'O‘rta',
    xp: 30,
    description:
      'Express backend ham production serverga deploy qilinishi va public API URLga ega bo‘lishi kerak.',
    topics: ['Express', 'server', 'API', 'production'],
    code: `app.listen(process.env.PORT || 3000);`,
    task: 'Express serveringizni production uchun tayyorlang.',
    tip: 'Production platformasi bergan PORT qiymatidan foydalaning.'
  },

  {
    id: 'deploy-06',
    module: 'deployment',
    order: 6,
    title: 'MongoDB Atlas production',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Production backend MongoDB Atlasdagi cloud database bilan ishlashi mumkin.',
    topics: ['Atlas', 'MongoDB', 'production'],
    code: `await mongoose.connect(
  process.env.MONGO_URI
);`,
    task: 'Production database connectionni environment variable orqali sozlang.',
    tip: 'Database credentialsni public repositoryga chiqarmang.'
  },

  {
    id: 'deploy-07',
    module: 'deployment',
    order: 7,
    title: 'CORS production',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Production frontend va backend turli domainlarda bo‘lsa, CORS sozlamalari to‘g‘ri berilishi kerak.',
    topics: ['CORS', 'origin', 'production'],
    code: `app.use(cors({
  origin: "https://your-site.com"
}));`,
    task: 'Backendda production frontend originini rejalashtiring.',
    tip: 'Development va production originlari farq qiladi.'
  },

  {
    id: 'deploy-08',
    module: 'deployment',
    order: 8,
    title: 'Custom domain',
    time: 20,
    difficulty: 'O‘rta',
    xp: 20,
    description:
      'Custom domain loyihaga professional web manzil biriktirish imkonini beradi.',
    topics: ['domain', 'DNS', 'HTTPS'],
    code: `https://example.com`,
    task: 'Portfolio loyihangiz uchun domain nomini rejalashtiring.',
    tip: 'Domain nomi qisqa va esda qoladigan bo‘lishi yaxshi.'
  },

  {
    id: 'deploy-09',
    module: 'deployment',
    order: 9,
    title: 'Monitoring va logs',
    time: 25,
    difficulty: 'O‘rta',
    xp: 25,
    description:
      'Production loyihada server logs va deployment platformasidagi monitoring xatolarni topishga yordam beradi.',
    topics: ['logs', 'monitoring', 'errors'],
    code: `console.log("API request:", req.method, req.url);`,
    task: 'Backend uchun foydali loglarni belgilang.',
    tip: 'Production loglarda maxfiy ma’lumotlarni chiqarib yubormang.'
  },

  {
    id: 'deploy-10',
    module: 'deployment',
    order: 10,
    title: 'Launch checklist',
    time: 30,
    difficulty: 'Advanced',
    xp: 40,
    description:
      'Loyihani internetga chiqarishdan oldin UI, API, database, environment, responsive va error holatlarini tekshirish kerak.',
    topics: [
      'UI',
      'API',
      'database',
      'responsive',
      'security',
      'deployment'
    ],
    code: `✓ Build
✓ API
✓ Database
✓ Environment
✓ Responsive
✓ Error handling`,
    task: 'O‘zingizning full-stack loyihangiz uchun launch checklist tuzing.',
    tip: 'Deploy tugashi loyiha tugadi degani emas — production test ham kerak.'
  }
];