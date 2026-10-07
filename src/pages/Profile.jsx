import React, { useEffect, useState } from 'react';
import {
  Coins,
  Flame,
  BookOpen,
  Award,
  Camera,
} from 'lucide-react';

import { useS } from '../store/StoreContext';

function Profile() {
  const st = useS();

  const [avatar, setAvatar] = useState(() =>
    localStorage.getItem('votto:avatar') || ''
  );

  useEffect(() => {
    if (avatar) {
      localStorage.setItem(
        'votto:avatar',
        avatar
      );
    }
  }, [avatar]);

  const handleAvatar = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      st.toast('Faqat rasm faylini tanlang.');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setAvatar(reader.result);
      st.toast('Profil rasmi yangilandi.');
    };

    reader.readAsDataURL(file);
  };

  const completedLessons =
    st.completedLessons ??
    st.done?.length ??
    0;

  const progress =
    st.overallProgress ?? 0;

  return (
    <div className="wrap">
      <div className="profile">
        <label
          className="pavatar"
          style={{
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          title="Profil rasmini o‘zgartirish"
        >
          {avatar ? (
            <img
              src={avatar}
              alt="Profil rasmi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <span>B</span>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleAvatar}
            style={{ display: 'none' }}
          />

          <span
            style={{
              position: 'absolute',
              right: '6px',
              bottom: '6px',
              width: '28px',
              height: '28px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '50%',
              background: 'rgba(0,0,0,.75)',
            }}
          >
            <Camera size={14} />
          </span>
        </label>

        <div>
          <small>DASTURCHI PROFILI</small>

          <h1>Behruz</h1>

          <p>
            Junior dasturchi bo‘lish yo‘lida
          </p>

          <span className="tag">
            JavaScript
          </span>

          <span className="tag">
            React tez orada
          </span>
        </div>
      </div>

      <div className="profilegrid">
        {/* LEARNING OVERVIEW */}
        <section className="panel">
          <small>O‘QISH NATIJALARI</small>

          <h2>
            JavaScript yo‘li{' '}
            <b>{progress}%</b>
          </h2>

          <div className="bigbar">
            <i
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p>
            {completedLessons} ta dars yakunlangan ·
            Davom eting!
          </p>

          <div className="stats smallstats">
            {[
              [Coins, 'Tangalar', st.coins],
              [Flame, 'Seriya', st.streak],
              [BookOpen, 'Darslar', completedLessons],
              [Award, 'Sertifikatlar', 1],
            ].map(([I, n, v]) => (
              <div key={n}>
                <I />

                <small>{n}</small>

                <b>{v}</b>
              </div>
            ))}
          </div>
        </section>

        {/* SKILL SIGNALS */}
        <section className="panel">
          <small>KO‘NIKMALAR</small>

          <h2>VOTTO siz haqingizda</h2>

          {[
            ['Funksiyalar', 88],
            ['Massivlar', 82],
            ['DOM', 46],
            ['Async/Await', 38],
          ].map(([name, value]) => (
            <div
              className="skill"
              key={name}
            >
              <span>
                {name}{' '}
                <b>{value}%</b>
              </span>

              <div className="bar">
                <i
                  style={{
                    width: `${value}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Profile;