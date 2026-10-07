import React from 'react';
import { useS } from '../store/StoreContext';
import { rewards } from '../data/rewards';

function Rewards() {
  const st = useS();

  return (
    <div className="wrap">
      <div className="modulehead">
        <div>
          <small>TANGALAR DO‘KONI</small>

          <h1>Mehnatingizni mukofotga aylantiring.</h1>

          <p>
            Dars o‘rganish, sinovlardan o‘tish va vazifalarni
            bajarish orqali tanga yig‘ing. Ularni foydali
            mukofotlarga almashtiring.
          </p>
        </div>

        <div className="balance">
          <small>SIZNING BALANSINGIZ</small>

          <b>
            {st.coins.toLocaleString()} 🪙
          </b>
        </div>
      </div>

      <div className="rewardgrid">
        {rewards.map(([id, I, t, d, p]) => {
          const redeemed =
            st.redeemed.includes(id);

          const canRedeem =
            st.coins >= p;

          return (
            <article
              className="reward"
              key={id}
            >
              <I />

              <small>
                {p.toLocaleString()} 🪙
              </small>

              <h3>{t}</h3>

              <p>{d}</p>

              <button
                className={`btn ${
                  redeemed
                    ? 'complete'
                    : canRedeem
                      ? 'primary'
                      : ''
                }`}
                disabled={redeemed}
                onClick={() => {
                  if (canRedeem) {
                    st.redeem(id, p);
                  }
                }}
              >
                {redeemed
                  ? '✓ Olingan'
                  : 'Almashtirish'}
              </button>

              {!redeemed && !canRedeem && (
                <em>
                  Yana{' '}
                  {(p - st.coins).toLocaleString()}{' '}
                  ta tanga kerak.
                </em>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Rewards;