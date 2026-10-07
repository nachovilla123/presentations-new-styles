import { useEffect, useState } from 'react';
import { Frame, Step, useStep, type SlideMeta } from '../../deck';

export const meta: SlideMeta = {
  title: 'Build · conversación',
  seccion: 'Builds · 06',
  hasGrid: true,
  steps: 6,
};

const MESSAGES = [
  { from: 'user', text: 'Necesito una landing para una app de meditación.' },
  { from: 'ai', text: 'Te propongo tres direcciones: cálida, minimal o editorial. ¿Cuál va mejor?' },
  { from: 'user', text: 'Minimal, con mucho aire y animaciones lentas.' },
  { from: 'ai', text: 'Listo: tipografía Sora, paleta apagada y un hero que respira. Te muestro el boceto.' },
  { from: 'user', text: 'Quiero que el botón sea más protagonista.' },
  { from: 'ai', text: 'Hecho. Subí el contraste y agregué un pulso sutil al hover.' },
] as const;

function TypingDots() {
  return (
    <span style={{ display: 'inline-flex', gap: 5 }}>
      {[0, 1, 2].map((dot) => (
        <i key={dot} style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-muted)', animation: `blink 1s ${dot * 0.18}s infinite` }} />
      ))}
    </span>
  );
}

interface BubbleProps {
  at: number;
  from: 'user' | 'ai';
  text: string;
}

function Bubble({ at, from, text }: BubbleProps) {
  const step = useStep();
  const isShown = step >= at;
  const isAi = from === 'ai';
  const [isTyping, setIsTyping] = useState(false);

  // The assistant "thinks" for a moment each time its bubble appears.
  useEffect(() => {
    if (!isShown || !isAi) return;
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 900);
    return () => clearTimeout(timer);
  }, [isShown, isAi]);

  return (
    <Step at={at} effect={isAi ? 'left' : 'right'} style={{ alignSelf: isAi ? 'flex-start' : 'flex-end', maxWidth: '46vw' }}>
      <div className={`card${isAi ? '' : ' acc'}`} style={{ padding: '0.9vw 1.3vw', minHeight: '3.2vw', justifyContent: 'center' }}>
        <span className="c-tag" style={{ fontSize: 'clamp(10px, 0.9vw, 18px)', letterSpacing: '0.18em' }}>{isAi ? 'IA' : 'VOS'}</span>
        <span className="c-body" style={{ color: 'var(--color-fg)', fontSize: 'clamp(13px, 1.3vw, 26px)' }}>
          {isAi && isTyping ? <TypingDots /> : text}
        </span>
      </div>
    </Step>
  );
}

export default function BuildChat() {
  return (
    <Frame meta={meta} isCentered>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
        {MESSAGES.map((message, index) => (
          <Bubble key={message.text} at={index + 1} from={message.from} text={message.text} />
        ))}
      </div>
    </Frame>
  );
}
