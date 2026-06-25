import React from 'react';
import { NameTag } from '../core/NameTag.jsx';

/**
 * StatGroup — a person's monthly stat block: a NameTag header over
 * one or more big Gmarket-Sans numerals with small captions.
 */
export function StatGroup({
  person = 'junghwa',    // 'junghwa' | 'haein'
  name,                  // header name, e.g. '정화'
  caption = '이번 달',
  stats = [],            // [{ value, label }]
  style = {},
  ...rest
}) {
  const isJ = person !== 'haein';
  const hue = isJ ? 'var(--accent-deep)' : 'var(--accent-2-deep)';

  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius)',
        padding: '1rem 1.1rem',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10,
        fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-medium)', color: 'var(--text-muted)',
      }}>
        <NameTag person={person}>{name}</NameTag>
        {caption}
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-stat)',
              fontWeight: 'var(--fw-bold)', lineHeight: 1, color: hue,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: 'var(--fs-2xs)', color: 'var(--text-muted)', marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
