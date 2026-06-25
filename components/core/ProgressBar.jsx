import React from 'react';

/**
 * ProgressBar — the per-person dosage-rate bar. Recessed track,
 * gradient fill in the person's hue, animated width.
 */
export function ProgressBar({
  value = 0,              // 0–100
  person = 'junghwa',    // 'junghwa' | 'haein'
  label,
  showPct = true,
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const isJ = person !== 'haein';
  const hue = isJ ? 'var(--accent)' : 'var(--accent-2)';
  const deep = isJ ? 'var(--accent-deep)' : 'var(--accent-2-deep)';
  const mid = isJ ? 'var(--accent-mid)' : 'var(--accent-2-mid)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }} {...rest}>
      {(label || showPct) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          {label && (
            <span style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-medium)', color: deep }}>
              {label}
            </span>
          )}
          {showPct && (
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-base)', fontWeight: 'var(--fw-bold)', color: deep }}>
              {pct}%
            </span>
          )}
        </div>
      )}
      <div style={{ height: 7, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          borderRadius: 'var(--radius-pill)',
          background: `linear-gradient(90deg, ${mid}, ${deep})`,
          transition: 'width var(--dur-slow) var(--ease-out)',
        }} />
      </div>
    </div>
  );
}
