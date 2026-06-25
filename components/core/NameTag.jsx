import React from 'react';

/**
 * NameTag — the pill that labels a person (정화 / 해인) in the
 * app's purple or pink tint. Also works as a generic soft badge.
 */
export function NameTag({
  children,
  person,                 // 'junghwa' | 'haein'
  tone,                   // override: 'purple' | 'pink' | 'neutral'
  style = {},
  ...rest
}) {
  const resolved =
    tone ? tone :
    person === 'haein' ? 'pink' :
    person === 'junghwa' ? 'purple' : 'neutral';

  const tones = {
    purple:  { background: 'var(--accent-light)',   color: 'var(--accent-deep)' },
    pink:    { background: 'var(--accent-2-light)',  color: 'var(--accent-2-deep)' },
    neutral: { background: 'var(--surface-2)',       color: 'var(--text-muted)' },
  };

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 'var(--fw-medium)',
        lineHeight: 1.4,
        ...tones[resolved],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
