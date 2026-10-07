import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Coins, Flame, Code2 } from 'lucide-react';
import { useS } from '../store/StoreContext';

function Nav() {
  const [s, setOpen] = useState(false);
  const st = useS();

  return (
    <header>
      <Link className="logo" to="/">
        <span>
          <Code2 size={18} />
        </span>
        VOTTO <b>Academy</b>
      </Link>

      <nav className={s ? 'open' : ''}>
        {[
          ['/', 'Dashboard'],
          ['/modules', 'Modules'],
          ['/rewards', 'Rewards'],
          ['/test', 'Test'],
          ['/profile', 'Profile'],
        ].map(([p, n]) => (
          <NavLink
            end={p === '/'}
            key={p}
            to={p}
            onClick={() => setOpen(false)}
          >
            {n}
          </NavLink>
        ))}
      </nav>

      <div className="navright">
        <i>
          <Coins size={15} />
          {st.coins.toLocaleString()}
        </i>

        <i>
          <Flame size={15} />
          {st.streak}
        </i>

        <Link className="avatar" to="/profile">
          B
        </Link>

        <button
          className="icon"
          onClick={() => setOpen(!s)}
        >
          {s ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Nav;