import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { GridBackground } from './GridBackground';
import { slides } from './registry';
import { StepContext } from './steps';
import { transitionVariants } from './variants';

function indexFromHash(): number {
  const route = window.location.hash.replace(/^#\/?/, '');
  const bySlug = slides.findIndex((slide) => slide.id === route);
  if (bySlug >= 0) return bySlug;
  const byNumber = Number(route);
  return Number.isInteger(byNumber) ? Math.min(Math.max(byNumber, 0), slides.length - 1) : 0;
}

export function Deck() {
  const [index, setIndex] = useState(indexFromHash);
  const [direction, setDirection] = useState(1);
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // Step to land on after the next hash change: 0 going forward, the last step going back.
  const arrivalStepRef = useRef(0);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const goTo = useCallback(
    (target: number, arrivalStep = 0) => {
      const clamped = Math.min(Math.max(target, 0), slides.length - 1);
      if (clamped === index) return;
      setDirection(clamped > index ? 1 : -1);
      arrivalStepRef.current = arrivalStep;
      window.location.hash = `/${slides[clamped].id}`;
    },
    [index],
  );

  const goNext = useCallback(() => {
    const stepCount = slides[index].meta.steps ?? 0;
    if (step < stepCount) setStep(step + 1);
    else goTo(index + 1);
  }, [index, step, goTo]);

  const goPrevious = useCallback(() => {
    if (step > 0) setStep(step - 1);
    else if (index > 0) goTo(index - 1, slides[index - 1].meta.steps ?? 0);
  }, [index, step, goTo]);

  // URL is the source of truth, so back/forward and shared links work.
  useEffect(() => {
    const onHashChange = () => {
      setIndex(indexFromHash());
      setStep(arrivalStepRef.current);
      arrivalStepRef.current = 0;
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Add `.visible` one frame after mount so the CSS `.reveal` transitions run.
  useEffect(() => {
    setIsVisible(false);
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
    return () => cancelAnimationFrame(frame);
  }, [index]);

  useEffect(() => {
    const current = slides[index];
    document.title = `${String(index).padStart(2, '0')}/${slides.length} · ${current.meta.title}`;
  }, [index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOverviewOpen(false);
      else if (event.key.toLowerCase() === 'o') setIsOverviewOpen((isOpen) => !isOpen);
      else if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) goNext();
      else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) goPrevious();
      else if (event.key === 'Home') goTo(0);
      else if (event.key === 'End') goTo(slides.length - 1);
      else if (event.key.toLowerCase() === 'f') {
        if (document.fullscreenElement) void document.exitFullscreen();
        else void document.documentElement.requestFullscreen();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrevious, goTo]);

  const { default: Slide, meta, id } = slides[index];
  const isDark = meta.variante === 'corte';
  const progress = slides.length > 1 ? (index / (slides.length - 1)) * 100 : 100;

  return (
    <main className="deck-viewport" data-slide={id}>
      {meta.hasGrid && !isDark && <GridBackground />}
      <motion.div
        className="progress"
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.section
          key={id}
          className={`slide${isDark ? ' slide--corte' : ''}${isVisible ? ' visible' : ''}`}
          custom={direction}
          variants={transitionVariants[meta.transition ?? 'slide']}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <StepContext.Provider value={step}>
            <Slide />
          </StepContext.Provider>
        </motion.section>
      </AnimatePresence>

      {(meta.steps ?? 0) > 0 && (
        <div className="step-dots" aria-label={`Paso ${step} de ${meta.steps}`}>
          {Array.from({ length: meta.steps ?? 0 }, (_, dotIndex) => (
            <i key={dotIndex} className={dotIndex < step ? 'on' : undefined} />
          ))}
        </div>
      )}

      <AnimatePresence>
        {isOverviewOpen && (
          <motion.div
            className="fixed inset-0 z-[60] overflow-y-auto bg-fondo/97 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mx-auto max-w-[1100px] px-10 py-14">
              <header className="mb-10 flex items-baseline justify-between border-b border-linea pb-6">
                <h2 className="font-display text-[28px] font-light">Resumen</h2>
                <p className="text-[13px] tracking-[.2em] text-muted uppercase">
                  {slides.length} diapositivas · clic para ir · Esc para cerrar
                </p>
              </header>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {slides.map((slide, slideIndex) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`overview-item${slideIndex === index ? ' current' : ''}`}
                    onClick={() => {
                      setIsOverviewOpen(false);
                      goTo(slideIndex);
                    }}
                  >
                    <span className="font-mono text-xs text-acento">{String(slideIndex).padStart(2, '0')}</span>
                    <span className="mt-1 block font-semibold">{slide.meta.title}</span>
                    <span className="mt-1 block text-xs tracking-widest text-muted uppercase">{slide.meta.seccion}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
