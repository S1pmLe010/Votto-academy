import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

import { useS } from '../store/StoreContext';
import { questions } from '../data/questions';

function Test() {
  const st = useS();

  const [i, setI] = useState(0);
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[i];

  const submit = () => {
    const sc = questions.reduce(
      (n, x, index) =>
        n + (ans[index] === x[2] ? 1 : 0),
      0
    );

    const pct = Math.round(
      (sc / questions.length) * 100
    );

    setScore(pct);
    setDone(true);
    st.test(pct);
  };

  if (done) {
    return (
      <div className="empty">
        <Trophy />

        <small>
          SINOV {score >= 70 ? 'MUVAFFAQIYATLI' : 'YAKUNLANMADI'}
        </small>

        <h1>{score}%</h1>

        <p>
          {score >= 70
            ? 'Ajoyib! VOTTO sinov uchun mukofotingizni qo‘shdi.'
            : 'Hali yetarli emas. Darsni qayta ko‘rib, yana urinib ko‘ring.'}
        </p>

        <button
          className="btn"
          onClick={() => {
            setAns({});
            setDone(false);
            setI(0);
            setScore(0);
          }}
        >
          Qayta topshirish
        </button>

        <Link
          className="btn primary"
          to="/modules/javascript"
        >
          Darslarni ko‘rib chiqish
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap">
      {/* HEADER */}
      <div className="modulehead">
        <div>
          <small>JAVASCRIPT · SINOV</small>

          <h1>Bilimingizni sinab ko‘ring.</h1>

          <p>
            Birinchi urinish eng katta mukofotni beradi.
            Yaxshi tayyorlaning va o‘zingizni sinab ko‘ring.
          </p>
        </div>

        <div className="attempt">
          URINISH {Math.min(st.attempts + 1, 5)}

          <b>
            +
            {
              [100, 70, 40, 10, 0][
                Math.min(st.attempts, 4)
              ]
            }{' '}
            🪙
          </b>
        </div>
      </div>

      {/* QUIZ */}
      <div className="testgrid">
        <section className="quiz">
          <small>
            SAVOL {i + 1} / {questions.length}
          </small>

          <h2>{q[0]}</h2>

          {q[1].map((a, j) => (
            <button
              key={j}
              className={
                ans[i] === j
                  ? 'answer sel'
                  : 'answer'
              }
              onClick={() =>
                setAns({
                  ...ans,
                  [i]: j,
                })
              }
            >
              <b>{String.fromCharCode(65 + j)}</b>
              {a}
            </button>
          ))}

          <div className="quiznav">
            {i > 0 && (
              <button
                className="btn"
                onClick={() => setI(i - 1)}
              >
                ← Oldingi
              </button>
            )}

            {i < questions.length - 1 ? (
              <button
                className="btn"
                disabled={ans[i] === undefined}
                onClick={() => setI(i + 1)}
              >
                Keyingi →
              </button>
            ) : (
              <button
                className="btn primary"
                disabled={
                  Object.keys(ans).length <
                  questions.length
                }
                onClick={submit}
              >
                Sinovni yakunlash
              </button>
            )}
          </div>
        </section>

        {/* COIN RULE */}
        <aside className="rule">
          <small>TANGA QOIDASI</small>

          <h3>Har bir urinish hisobga olinadi.</h3>

          <p>
            1-urinish +100 · 2-urinish +70 ·
            3-urinish +40 · 4-urinish +10 ·
            keyin +0
          </p>
        </aside>
      </div>
    </div>
  );
}

export default Test;