import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

export const Store = createContext();

export const load = (key, defaultValue) => {
  try {
    const value = localStorage.getItem(`votto:${key}`);
    return value !== null
      ? JSON.parse(value)
      : defaultValue;
  } catch {
    return defaultValue;
  }
};

const INITIAL_STATE = {
  coins: 1840,

  streak: 7,
  best: 12,

  level: 12,

  done: [
    'js-variables',
    'js-functions',
    'js-arrays',
  ],

  attempts: 0,

  scores: [],

  quests: [],

  redeemed: [],

  mode: 'cute',

  // Daily activity
  lastActive: null,

  // Total XP earned
  xp: 0,

  // Completed days
  activeDays: 7,

  // Daily lesson counter
  todayLessons: 0,

  // Last completed lesson
  lastLesson: null,
};

export function Provider({ children }) {
  const [s, setS] = useState(() =>
    load('state', INITIAL_STATE)
  );

  const [toastMessage, setToastMessage] =
    useState('');

  // Save state
  useEffect(() => {
    localStorage.setItem(
      'votto:state',
      JSON.stringify(s)
    );
  }, [s]);

  // Toast
  const toast = (message) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage('');
    }, 2400);
  };

  // Get today's date
  const getToday = () => {
    const now = new Date();

    return now.toISOString().split('T')[0];
  };

  // Get yesterday's date
  const getYesterday = () => {
    const now = new Date();

    now.setDate(now.getDate() - 1);

    return now.toISOString().split('T')[0];
  };

  // Calculate level from XP
  const calculateLevel = (xp) => {
    return Math.max(
      1,
      Math.floor(xp / 100) + 1
    );
  };

  // COMPLETE LESSON
  const complete = (id) => {
    setS((current) => {
      // Already completed
      if (current.done.includes(id)) {
        return current;
      }

      const today = getToday();
      const yesterday = getYesterday();

      let newStreak = current.streak;

      // First activity
      if (!current.lastActive) {
        newStreak = 1;
      }

      // Activity continued from yesterday
      else if (current.lastActive === yesterday) {
        newStreak = current.streak + 1;
      }

      // Already active today
      else if (current.lastActive === today) {
        newStreak = current.streak;
      }

      // Missed one or more days
      else {
        newStreak = 1;
      }

      const newBest = Math.max(
        current.best,
        newStreak
      );

      const lessonXP = 25;

      const newXP = current.xp + lessonXP;

      const newLevel = calculateLevel(newXP);

      return {
        ...current,

        done: [
          ...current.done,
          id,
        ],

        coins: current.coins + 10,

        xp: newXP,

        level: newLevel,

        streak: newStreak,

        best: newBest,

        lastActive: today,

        todayLessons:
          current.lastActive === today
            ? current.todayLessons + 1
            : 1,

        activeDays:
          current.lastActive === today
            ? current.activeDays
            : current.activeDays + 1,

        lastLesson: id,
      };
    });

    toast(
      '+10 🪙 · +25 XP · Lesson complete'
    );
  };

  // TEST
  const test = (score) => {
    setS((current) => {
      const rewards = [
        100,
        70,
        40,
        10,
        0,
      ];

      const reward =
        rewards[
          Math.min(current.attempts, 4)
        ];

      const newScores = [
        ...current.scores,
        score,
      ];

      const testXP = Math.max(
        5,
        Math.round(score * 0.5)
      );

      const newXP =
        current.xp + testXP;

      return {
        ...current,

        attempts:
          current.attempts + 1,

        scores: newScores,

        coins:
          current.coins + reward,

        xp: newXP,

        level:
          calculateLevel(newXP),
      };
    });

    setTimeout(() => {
      const rewards = [
        100,
        70,
        40,
        10,
        0,
      ];

      const reward =
        rewards[
          Math.min(s.attempts, 4)
        ];

      if (reward > 0) {
        toast(
          `+${reward} 🪙 · Test submitted`
        );
      } else {
        toast(
          'Test submitted · no coin reward'
        );
      }
    }, 0);
  };

  // REDEEM REWARD
  const redeem = (id, price) => {
    if (s.redeemed.includes(id)) {
      return toast(
        'You already redeemed this reward.'
      );
    }

    if (s.coins < price) {
      return toast(
        `You need ${(price - s.coins).toLocaleString()} more coins.`
      );
    }

    setS((current) => ({
      ...current,

      coins:
        current.coins - price,

      redeemed: [
        ...current.redeemed,
        id,
      ],
    }));

    toast(
      'Reward redeemed successfully'
    );
  };

  // CHANGE VOTTO MODE
  const setMode = (mode) => {
    setS((current) => ({
      ...current,
      mode,
    }));
  };

  // RESET PROGRESS
  const resetProgress = () => {
    setS({
      ...INITIAL_STATE,
      lastActive: null,
      xp: 0,
      activeDays: 0,
      todayLessons: 0,
    });

    toast('Progress reset');
  };

  // RESET EVERYTHING
  const resetAll = () => {
    localStorage.removeItem(
      'votto:state'
    );

    setS(INITIAL_STATE);

    toast('VOTTO data reset');
  };

  /*
    DERIVED DATA
    -------------------------
    UI uchun avtomatik hisoblanadigan
    ma'lumotlar.
  */

  const totalLessons = 86;

  const completedLessons =
    s.done.length;

  const overallProgress =
    Math.min(
      100,
      Math.round(
        (completedLessons /
          totalLessons) *
          100
      )
    );

  const averageScore =
    s.scores.length > 0
      ? Math.round(
          s.scores.reduce(
            (sum, score) =>
              sum + score,
            0
          ) / s.scores.length
        )
      : 0;

  const bestScore =
    s.scores.length > 0
      ? Math.max(...s.scores)
      : 0;

  const isActiveToday =
    s.lastActive === getToday();

  return (
    <Store.Provider
      value={{
        ...s,

        // Actions
        complete,
        test,
        redeem,
        setMode,
        toast,

        resetProgress,
        resetAll,

        // Derived data
        completedLessons,
        totalLessons,
        overallProgress,

        averageScore,
        bestScore,

        isActiveToday,
      }}
    >
      {children}

      {toastMessage && (
        <div className="toast">
          ✓ {toastMessage}
        </div>
      )}
    </Store.Provider>
  );
}

export const useS = () =>
  useContext(Store);    