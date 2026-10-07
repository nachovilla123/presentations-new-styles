import { Frame, type SlideMeta } from '../../deck';
import { BeforeAfter } from '../../kit';

export const meta: SlideMeta = {
  title: 'Antes y después',
  seccion: 'Efectos · 12',
  hasGrid: true,
  transition: 'fade',
};

function Mock({ isPolished }: { isPolished: boolean }) {
  const ink = isPolished ? '#f6f1e7' : '#9a948a';
  const panel = isPolished ? '#14120e' : '#fbf9f4';
  const block = isPolished ? '#222019' : '#e9e4d8';
  return (
    <div className="compare-layer" style={{ background: panel, padding: '4%', display: 'flex', flexDirection: 'column', gap: '4%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '14%', height: 14, borderRadius: 4, background: isPolished ? '#e8482b' : block }} />
        <div style={{ display: 'flex', gap: 12 }}>
          {[0, 1, 2].map((item) => (
            <div key={item} style={{ width: 46, height: 8, borderRadius: 4, background: isPolished ? '#6b665c' : block }} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: '3%' }}>
        <div style={{ width: '62%', height: isPolished ? 34 : 26, borderRadius: isPolished ? 6 : 3, background: isPolished ? ink : block }} />
        <div style={{ width: '40%', height: isPolished ? 34 : 26, borderRadius: isPolished ? 6 : 3, background: isPolished ? '#e8482b' : block }} />
        <div style={{ width: '48%', height: 10, borderRadius: 4, background: isPolished ? '#6b665c' : block, marginTop: 6 }} />
        <div style={{ width: 120, height: 34, borderRadius: isPolished ? 999 : 3, background: isPolished ? '#e8482b' : 'transparent', border: isPolished ? 'none' : `2px dashed ${ink}`, marginTop: 8 }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 'auto' }}>
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            style={{
              height: 74,
              borderRadius: isPolished ? 12 : 2,
              background: isPolished ? 'linear-gradient(135deg, #2a2620, #1a1812)' : 'transparent',
              border: isPolished ? '1px solid #3a352c' : `2px solid ${ink}`,
              boxShadow: isPolished ? '0 14px 30px -18px #000' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Comparador() {
  return (
    <Frame meta={meta} isCentered>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4vw' }}>
        <div style={{ flex: '0 0 26%' }}>
          <p className="eyebrow reveal">Comparador</p>
          <h2 className="display reveal mt-s" style={{ fontSize: 'var(--fs-title)' }}>
            Del boceto
            <br />
            al <span className="accent">final</span>
          </h2>
          <p className="sub reveal mt-m">Mismo contenido, cuatro rondas de iteración.</p>
        </div>
        <div className="reveal" style={{ width: 'min(62vw, 110vh)' }}>
          <BeforeAfter before={<Mock isPolished={false} />} after={<Mock isPolished />} beforeLabel="Boceto" afterLabel="Final" />
        </div>
      </div>
    </Frame>
  );
}
