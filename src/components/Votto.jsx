import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useS } from '../store/StoreContext';

function Votto() {
  const st = useS();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState([]);

  const reply = (x) => {
    const q = x.toLowerCase();

    if (q.includes('coin')) {
      return `You currently have ${st.coins.toLocaleString()} coins.`;
    }

    if (q.includes('streak')) {
      return `Your streak is ${st.streak} days. Keep it alive today.`;
    }

    if (q.includes('javascript') || q.includes('js')) {
      return "You're currently studying JavaScript. DOM and Events are next.";
    }

    if (q.includes('react')) {
      return 'React is next after your JavaScript foundation. Components, state, and props are waiting.';
    }

    if (q.includes('help')) {
      if (st.mode === 'cute') {
        return 'Of course! Tell me which lesson is giving you trouble.';
      }

      if (st.mode === 'strong') {
        return 'Tell me the exact problem. We’ll solve it step by step.';
      }

      return 'You finally asked for help. Good. Now show me the problem.';
    }

    if (st.mode === 'cute') {
      return 'Ehehe~ I can help with JavaScript, React, coins, streaks, tests, or lessons.';
    }

    return 'Be specific. Ask me about JavaScript, React, coins, streaks, tests, or lessons.';
  };

  const send = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const x = input.trim();

    setMsgs((m) => [...m, { u: x }]);
    setInput('');

    setTimeout(() => {
      setMsgs((m) => [...m, { v: reply(x) }]);
    }, 100);
  };

  return (
    <div className="votto">
      {open ? (
        <div className="vpanel">
          <div className="vhead">
            <div>
              <small>SUPPORT VOTTO</small>
              <b>{st.mode.toUpperCase()} VOTTO</b>
            </div>

            <button
              className="icon"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          <div className="vface">
            {st.mode === 'angry'
              ? '¬_¬'
              : st.mode === 'strong'
                ? 'ಠ_ಠ'
                : '◕‿◕'}
          </div>

          <p className="dialog">
            {msgs.length
              ? msgs[msgs.length - 1].v ||
                msgs[msgs.length - 1].u
              : 'I saved your learning path! Ask me anything.'}
          </p>

          <div className="modes">
            {['cute', 'strong', 'angry'].map((m) => (
              <button
                key={m}
                className={st.mode === m ? 'active' : ''}
                onClick={() => st.setMode(m)}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="history">
            {msgs.map((m, i) => (
              <span
                key={i}
                className={m.u ? 'u' : ''}
              >
                {m.u || m.v}
              </span>
            ))}
          </div>

          <form onSubmit={send}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask VOTTO..."
            />

            <button type="submit">
              <Send size={15} />
            </button>
          </form>
        </div>
      ) : (
        <button
          className="vfab"
          onClick={() => setOpen(true)}
        >
          <span>◕‿◕</span>
          Talk to VOTTO
        </button>
      )}
    </div>
  );
}

export default Votto;