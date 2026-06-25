import React from 'react';

/**
 * Card — the white, hairline-bordered, softly-rounded surface that
 * every block in the app sits on (stats, progress, calendar).
 */
export function Card({
  children,
  padding = 'md',         // 'sm' | 'md' | 'lg'
  elevated = false,       // add the soft tinted shadow
  style = {},
  ...rest
}) {
  const pads = { sm: '1rem 1.1rem', md: '1.25rem', lg: '1.5rem' };
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius)',
        padding: pads[padding],
        boxShadow: elevated ? 'var(--shadow-card)' : 'var(--shadow-none)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
