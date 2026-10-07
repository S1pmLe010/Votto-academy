import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="empty">
      <h1>404</h1>

      <p>Bu sahifa mavjud emas.</p>

      <Link className="btn primary" to="/">
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

export default NotFound;