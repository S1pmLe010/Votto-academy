import React from 'react';
import { modules } from '../data/modules';
import Card from '../components/Card';
import { useS } from '../store/StoreContext';

function Modules() {
  const st = useS();

  const progress = st.overallProgress ?? 0;

  // Birinchi faol modulni topamiz
  const currentModule =
    modules.find((m) => m[6] === 'active') ||
    modules.find((m) => m[6] === 'available') ||
    modules[0];

  const currentOrder = currentModule?.[0] ?? '01';
  const currentTitle = currentModule?.[1] ?? 'HTML + CSS';
  const currentSubtitle = currentModule?.[2] ?? '';

  return (
    <div className="wrap">
      {/* HEADER */}
      <div className="heading">
        <div>
          <small>O‘QUV YO‘L XARITASI</small>

          <h2>Full-stack dasturchi bo‘lish yo‘li.</h2>

          <p>
            Amaliy modullarni o‘rganing, tangalar yig‘ing
            va yangi ko‘nikmalarni bosqichma-bosqich oching.
          </p>
        </div>
      </div>

      {/* CURRENT FOCUS */}
      <div className="focus">
        <div>
          <small>JORIY YO‘NALISH</small>

          <b>
            MODUL {currentOrder} · {currentTitle}
          </b>

          <p>
            {progress}% umumiy o‘zlashtirish ·{' '}
            {currentSubtitle}
          </p>
        </div>

        <strong>{progress}%</strong>
      </div>

      {/* MODULES */}
      <div className="grid">
        {modules.map((m) => (
          <Card
            key={m[7] || m[0]}
            m={m}
          />
        ))}
      </div>
    </div>
  );
}

export default Modules;