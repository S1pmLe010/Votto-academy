import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Lock,
  CheckCircle2,
} from 'lucide-react';

export default function Card({ m }) {
  const [
    order,
    title,
    subtitle,
    progress,
    lessonCount,
    xp,
    status,
    moduleId,
  ] = m;

  const locked = status === 'locked';
  const completed = status === 'completed';

  return (
    <Link
      to={locked ? '#' : `/modules/${moduleId}`}
      className={`card ${locked ? 'locked' : ''}`}
      onClick={(e) => {
        if (locked) {
          e.preventDefault();
        }
      }}
    >
      <div className="card-top">
        <small>MODUL {order}</small>

        {completed ? (
          <CheckCircle2 size={18} />
        ) : locked ? (
          <Lock size={18} />
        ) : (
          <ArrowRight size={18} />
        )}
      </div>

      <h3>{title}</h3>

      <p>{subtitle}</p>

      <div className="card-progress">
        <div className="progress-line">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="card-progress-info">
          <span>{progress}%</span>
          <span>{lessonCount} ta dars</span>
        </div>
      </div>

      <div className="card-bottom">
        <span>
          {xp} XP
        </span>

        <span>
          {completed
            ? 'Yakunlangan'
            : locked
              ? 'Qulflangan'
              : 'Boshlash'}
        </span>
      </div>
    </Link>
  );
}