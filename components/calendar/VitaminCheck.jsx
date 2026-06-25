import React from 'react';

/**
 * VitaminCheck — one tappable vitamin row: a hue-accented checkbox
 * plus a label that strikes through when done, with a soft "missed"
 * dot for past, unchecked days.
 */
export function VitaminCheck({
  label,
  person = 'junghwa',    // 'junghwa' | 'haein'
  checked = false,
  missed = false,
  onChange,
  style = {},
  ...rest
}) {
  const isJ = person !== 'haein';
  const hue = isJ ? 'var(--accent-deep)' : 'var(--accent-2-deep)';
  const fill = isJ ? 'var(--accent)' : 'var(--accent-2)';

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        cursor: 'pointer',
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
        background: 'var(--status-missed)',
        visibility: missed && !checked ? 'visible' : 'hidden',
      }} />
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ width: 12, height: 12, margin: 0, flexShrink: 0, cursor: 'pointer', accentColor: fill }}
      />
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-2xs)',
        lineHeight: 'var(--lh-snug)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: checked ? hue : 'var(--text-muted)',
        textDecoration: checked ? 'line-through' : 'none',
        transition: 'color var(--dur-fast)',
      }}>
        {label}
      </span>
    </label>
  );
}
