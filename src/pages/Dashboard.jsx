import React from 'react';
import { Link } from 'react-router-dom';
import {
  Coins,
  Flame,
  Trophy,
  BookOpen,
  Target,
  ArrowRight,
} from 'lucide-react';

import { useS } from '../store/StoreContext';
import { modules } from '../data/modules';
import Card from '../components/Card';

function Dashboard() {
  const st = useS();

  const completedLessons = st.completedLessons ?? st.done?.length ?? 0;
  const currentProgress = st.overallProgress ?? 0;

  const xpToNextLevel =
    100 - ((st.xp ?? 0) % 100);

  return (
    <div className="wrap">
      {/* HERO */}
      <section className="hero">
        <div>
          <small className="eyebrow">
            🔥 O‘QISH SERIYASI · {st.streak} KUN
          </small>

          <h1>
            O‘rganishda davom et.
            <br />
            <em>Darajangni oshir.</em>
          </h1>

          <p>
            Dasturchilik yo‘ling allaqachon boshlandi.
            Bugungi darsni yakunla va seriyangni davom ettir.
          </p>

          <div className="actions">
            <Link
              className="btn primary"
              to="/modules/javascript"
            >
              JavaScriptni davom ettirish
              <ArrowRight size={16} />
            </Link>

            <Link className="btn" to="/test">
              Sinov topshirish
            </Link>
          </div>

          <small className="note">
            🔥 <b>{st.streak} kunlik seriya</b>
            <br />
            10 kunlik mukofotgacha yana{' '}
            {Math.max(0, 10 - st.streak)} kun qoldi.
          </small>
        </div>

        {/* VOTTO */}
        <div className="vhero">
          <div className="face">◕‿◕</div>

          <small>VOTTO YORDAMCHISI</small>

          <h3>O‘qish yo‘lingni eslab qoldim!</h3>

          <p>
            Funksiyalar va massivlar yaxshi o‘zlashtirilgan.
            Keyingi mavzu — DOM.
          </p>

          <button
            className="btn"
            onClick={() =>
              document.querySelector('.vfab')?.click()
            }
          >
            VOTTO bilan suhbat
          </button>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        {[
          [
            Coins,
            'Jami tangalar',
            st.coins.toLocaleString(),
            '+240 shu hafta',
          ],
          [
            Flame,
            'Joriy seriya',
            `${st.streak} kun`,
            `Rekord: ${st.best} kun`,
          ],
          [
            Trophy,
            'Daraja',
            st.level,
            `${xpToNextLevel} XP keyingi darajagacha`,
          ],
          [
            BookOpen,
            'Tugatilgan darslar',
            completedLessons,
            `${currentProgress}% umumiy o‘zlashtirish`,
          ],
        ].map(([I, a, b, c]) => (
          <div key={a}>
            <I />
            <small>{a}</small>
            <strong>{b}</strong>
            <span>{c}</span>
          </div>
        ))}
      </div>

      {/* DAILY QUEST */}
      <div className="quest">
        <Target />

        <div>
          <small>KUNLIK VAZIFA</small>

          <b>JavaScript sinovidan o‘tish</b>

          <p>
            Bugungi vazifani bajaring va +100 🪙 ishlab oling.
          </p>
        </div>

        <strong>+100 🪙</strong>

        <Link className="btn" to="/test">
          Vazifani boshlash
        </Link>
      </div>

      {/* ROADMAP */}
      <section>
        <div className="heading">
          <div>
            <small>SIZNING YO‘L XARITANGIZ</small>

            <h2>Full-stack dasturchi bo‘lish yo‘li.</h2>

            <p>
              Har bir modul yangi ko‘nikmani amaliy loyihalarda
              qo‘llashga yordam beradi.
            </p>
          </div>

          <Link to="/modules">
            Barchasini ko‘rish →
          </Link>
        </div>

        <div className="grid">
          {modules.map((m) => (
            <Card
              key={m[0]}
              m={m}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;