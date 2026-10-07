import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Lock,
  Play,
  Sparkles,
} from 'lucide-react';

import { modules } from '../data/modules';
import { lessons } from '../data/lessons';
import { useS } from '../store/StoreContext';

export default function Module() {
  const { id } = useParams();
  const st = useS();

  /* =========================
     MODULE
  ========================= */

  const module = useMemo(() => {
    return modules.find((m) => m[7] === id);
  }, [id]);

  /* =========================
     LESSONS
  ========================= */

  const moduleLessons = useMemo(() => {
    if (!module) return [];

    return lessons.filter((lesson) => lesson.module === id);
  }, [id, module]);

  /* =========================
     SELECTED LESSON
  ========================= */

  const [selectedLessonId, setSelectedLessonId] = useState(null);

  useEffect(() => {
    if (moduleLessons.length > 0) {
      setSelectedLessonId(moduleLessons[0].id);
    } else {
      setSelectedLessonId(null);
    }
  }, [id, moduleLessons]);

  const selectedLesson = useMemo(() => {
    if (!moduleLessons.length) return null;

    return (
      moduleLessons.find(
        (lesson) => lesson.id === selectedLessonId
      ) || moduleLessons[0]
    );
  }, [moduleLessons, selectedLessonId]);

  /* =========================
     SCROLL WHEN LESSON CHANGES
  ========================= */

  useEffect(() => {
    if (!selectedLesson) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [selectedLesson?.id]);

  /* =========================
     PROGRESS
  ========================= */

  const completedLessons = moduleLessons.filter((lesson) =>
    st.done?.includes(lesson.id)
  ).length;

  const totalLessons = moduleLessons.length;

  const progress =
    totalLessons > 0
      ? Math.round((completedLessons / totalLessons) * 100)
      : 0;

  /* =========================
     CURRENT INDEX
  ========================= */

  const currentIndex = selectedLesson
    ? moduleLessons.findIndex(
        (lesson) => lesson.id === selectedLesson.id
      )
    : -1;

  const previousLesson =
    currentIndex > 0
      ? moduleLessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex >= 0 &&
    currentIndex < moduleLessons.length - 1
      ? moduleLessons[currentIndex + 1]
      : null;

  /* =========================
     SAFE HELPERS
  ========================= */

  const getText = (value, fallback = '') => {
    if (typeof value === 'string') return value;

    if (typeof value === 'number') {
      return String(value);
    }

    if (value && typeof value === 'object') {
      return (
        value.description ||
        value.title ||
        value.text ||
        value.content ||
        fallback
      );
    }

    return fallback;
  };

  const getCode = (value) => {
    if (!value) return '';

    if (typeof value === 'string') {
      return value;
    }

    if (typeof value === 'number') {
      return String(value);
    }

    if (typeof value === 'object') {
      /*
        Agar code:
        {
          html: "...",
          css: "...",
          js: "..."
        }
        ko‘rinishida bo‘lsa ham ishlaydi.
      */

      return Object.entries(value)
        .map(([key, code]) => {
          if (typeof code === 'string') {
            return `// ${key.toUpperCase()}\n${code}`;
          }

          return `// ${key.toUpperCase()}\n${getText(code)}`;
        })
        .join('\n\n');
    }

    return String(value);
  };

  const getTopics = (value) => {
    if (!Array.isArray(value)) return [];

    return value.map((topic, index) => {
      if (typeof topic === 'string') {
        return {
          id: index,
          title: topic,
          description: '',
        };
      }

      if (typeof topic === 'object' && topic !== null) {
        return {
          id: topic.id || index,
          title:
            topic.title ||
            topic.name ||
            topic.text ||
            `Mavzu ${index + 1}`,
          description:
            topic.description ||
            topic.text ||
            '',
        };
      }

      return {
        id: index,
        title: String(topic),
        description: '',
      };
    });
  };

  /* =========================
     COMPLETE
  ========================= */

  const handleComplete = () => {
    if (!selectedLesson) return;

    const alreadyCompleted = st.done?.includes(
      selectedLesson.id
    );

    if (alreadyCompleted) return;

    /*
      Yangi StoreContext bo‘lsa completeLesson,
      eski StoreContext bo‘lsa complete ishlaydi.
    */

    if (typeof st.completeLesson === 'function') {
      st.completeLesson(selectedLesson.id);
      return;
    }

    if (typeof st.complete === 'function') {
      st.complete(selectedLesson.id);
    }
  };

  /* =========================
     NAVIGATION
  ========================= */

  const openLesson = (lesson) => {
    if (!lesson) return;

    setSelectedLessonId(lesson.id);
  };

  const openPrevious = () => {
    if (previousLesson) {
      setSelectedLessonId(previousLesson.id);
    }
  };

  const openNext = () => {
    if (nextLesson) {
      setSelectedLessonId(nextLesson.id);
    }
  };

  /* =========================
     MODULE NOT FOUND
  ========================= */

  if (!module) {
    return (
      <div className="module-page">
        <div className="module-layout">
          <div className="lesson-content lesson-empty">
            <div className="lesson-empty-inner">
              <Lock size={42} />

              <h2>Modul topilmadi</h2>

              <p>
                Siz qidirayotgan modul mavjud emas yoki
                manzil noto‘g‘ri.
              </p>

              <Link
                to="/modules"
                className="btn primary"
                style={{ marginTop: 20 }}
              >
                <ArrowLeft size={16} />
                Modullarga qaytish
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     MODULE DATA
  ========================= */

  const moduleOrder = module[0];
  const moduleTitle = module[1];
  const moduleSubtitle = module[2];
  const moduleStatus = module[6];

  const topics = selectedLesson
    ? getTopics(selectedLesson.topics)
    : [];

  const description = selectedLesson
    ? getText(
        selectedLesson.description,
        'Ushbu darsda kerakli bilimlarni bosqichma-bosqich o‘rganasiz.'
      )
    : '';

  const code = selectedLesson
    ? getCode(selectedLesson.code)
    : '';

  const isCompleted =
    selectedLesson &&
    st.done?.includes(selectedLesson.id);

  const difficulty =
    selectedLesson?.difficulty || 'Boshlang‘ich';

  const lessonTime =
    selectedLesson?.time || '10 min';

  const lessonXp =
    selectedLesson?.xp ?? 10;

  const task =
    selectedLesson?.task ||
    selectedLesson?.practice ||
    selectedLesson?.exercise ||
    '';

  return (
    <div className="module-page">

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="module-layout">

        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="lesson-sidebar">

          <div className="lesson-sidebar-header">

            <small>
              MODUL {moduleOrder}
            </small>

            <h3>
              {moduleTitle}
            </h3>

            <p>
              {moduleSubtitle}
            </p>

          </div>

          {/* LESSON LIST */}

          <div className="lesson-list">

            {moduleLessons.map((lesson, index) => {

              const completed =
                st.done?.includes(lesson.id);

              const active =
                selectedLesson?.id === lesson.id;

              const lessonOrder =
                lesson.order ?? index + 1;

              const title =
                getText(
                  lesson.title,
                  `Dars ${lessonOrder}`
                );

              return (
                <button
                  key={lesson.id || index}
                  type="button"
                  className={[
                    'lesson-item',
                    active ? 'active' : '',
                    completed ? 'completed' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() =>
                    openLesson(lesson)
                  }
                >

                  <span className="lesson-number">
                    {completed ? (
                      <Check size={15} />
                    ) : (
                      String(lessonOrder).padStart(
                        2,
                        '0'
                      )
                    )}
                  </span>

                  <span className="lesson-info">

                    <strong>
                      {title}
                    </strong>

                    <span>
                      {lesson.time || '10 min'}
                    </span>

                  </span>

                  <span className="lesson-status">

                    {completed ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Clock3 size={15} />
                    )}

                  </span>

                </button>
              );
            })}

          </div>

          {/* MODULE PROGRESS */}

          <div className="module-progress">

            <div className="module-progress-top">

              <span>
                Modul progressi
              </span>

              <strong>
                {progress}%
              </strong>

            </div>

            <div className="module-progress-bar">

              <div
                className="module-progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <div
              style={{
                marginTop: 8,
                color: 'rgba(255,255,255,.38)',
                fontSize: 10,
              }}
            >
              {completedLessons} / {totalLessons} dars
            </div>

          </div>

        </aside>

        {/* ===================================================
            MAIN LESSON
        =================================================== */}

        <main className="lesson-content">

          {!selectedLesson ? (

            <div className="lesson-empty">

              <div className="lesson-empty-inner">

                <Sparkles size={42} />

                <h2>
                  Darslar hali mavjud emas
                </h2>

                <p>
                  Ushbu modul uchun darslar
                  qo‘shilmagan.
                </p>

              </div>

            </div>

          ) : (

            <>

              {/* =============================================
                  LESSON HEADER
              ============================================= */}

              <div className="lesson-top">

                <div>

                  <div className="lesson-meta">

                    <span>
                      DARS{' '}
                      {String(
                        selectedLesson.order ??
                          currentIndex + 1
                      ).padStart(2, '0')}
                    </span>

                    <span>
                      {difficulty}
                    </span>

                    <span>
                      {lessonTime}
                    </span>

                  </div>

                  <h1>
                    {getText(
                      selectedLesson.title,
                      'Dars'
                    )}
                  </h1>

                  <p>
                    {getText(
                      selectedLesson.shortDescription ||
                        selectedLesson.subtitle ||
                        selectedLesson.description,
                      'Ushbu darsni o‘rganing va amaliy topshiriqni bajaring.'
                    )}
                  </p>

                </div>

                <div className="lesson-xp">
                  +{lessonXp} XP
                </div>

              </div>

              {/* =============================================
                  DESCRIPTION
              ============================================= */}

              <section className="lesson-description">

                <h3>
                  Dars haqida
                </h3>

                <p>
                  {description}
                </p>

              </section>

              {/* =============================================
                  TOPICS
              ============================================= */}

              {topics.length > 0 && (

                <section className="lesson-topics">

                  <h3>
                    Bu darsda
                  </h3>

                  <div className="topic-list">

                    {topics.map((topic) => (

                      <div
                        className="topic"
                        key={topic.id}
                        title={topic.description || ''}
                      >
                        {topic.title}
                      </div>

                    ))}

                  </div>

                </section>

              )}

              {/* =============================================
                  VIDEO PLACEHOLDER
              ============================================= */}

              {selectedLesson.video && (

                <div
                  className="video"
                  style={{
                    marginBottom: 28,
                    borderRadius: 18,
                    overflow: 'hidden',
                  }}
                >

                  <small>
                    VIDEO DARS
                  </small>

                  <button
                    type="button"
                    onClick={() => {
                      if (st.toast) {
                        st.toast(
                          'Video tez orada qo‘shiladi.'
                        );
                      }
                    }}
                  >
                    <Play
                      size={22}
                      fill="currentColor"
                    />
                  </button>

                </div>

              )}

              {/* =============================================
                  CODE
              ============================================= */}

              {code && (

                <section className="lesson-code">

                  <h3>
                    Kod namunasi
                  </h3>

                  <div className="code-wrapper">

                    <div className="code-header">

                      <span className="code-dot" />
                      <span className="code-dot" />
                      <span className="code-dot" />

                      <span>
                        {selectedLesson.language ||
                          'CODE'}
                      </span>

                    </div>

                    <pre>
                      <code>
                        {code}
                      </code>
                    </pre>

                  </div>

                </section>

              )}

              {/* =============================================
                  PRACTICE / TASK
              ============================================= */}

              {task && (

                <section className="lesson-task">

                  <h3>
                    Amaliy topshiriq
                  </h3>

                  <p>
                    {getText(task)}
                  </p>

                </section>

              )}

              {/* =============================================
                  ACTIONS
              ============================================= */}

              <div className="lesson-actions">

                <button
                  type="button"
                  className={[
                    'complete-btn',
                    isCompleted
                      ? 'completed'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={handleComplete}
                  disabled={Boolean(isCompleted)}
                >

                  {isCompleted ? (
                    <>
                      <CheckCircle2 size={17} />
                      Dars tugallangan
                    </>
                  ) : (
                    <>
                      <Check size={17} />
                      Darsni tugatish
                    </>
                  )}

                </button>

                <span
                  style={{
                    color:
                      'rgba(255,255,255,.35)',
                    fontSize: 11,
                  }}
                >
                  {currentIndex + 1} /{' '}
                  {totalLessons}
                </span>

              </div>

              {/* =============================================
                  PREVIOUS / NEXT
              ============================================= */}

              <div className="lesson-navigation">

                <button
                  type="button"
                  className="lesson-nav-btn"
                  disabled={!previousLesson}
                  onClick={openPrevious}
                >

                  <ArrowLeft size={15} />

                  {previousLesson ? (
                    <>
                      Oldingi dars
                    </>
                  ) : (
                    <>
                      Birinchi dars
                    </>
                  )}

                </button>

                <button
                  type="button"
                  className="lesson-nav-btn"
                  disabled={!nextLesson}
                  onClick={openNext}
                >

                  {nextLesson ? (
                    <>
                      Keyingi dars
                    </>
                  ) : (
                    <>
                      Modul tugadi
                    </>
                  )}

                  <ArrowRight size={15} />

                </button>

              </div>

            </>

          )}

        </main>

      </div>

    </div>
  );
}