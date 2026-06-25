import React from 'react';
import { VitaminCheck } from './VitaminCheck.jsx';

/**
 * CalendarCell — one day in the month grid. Tints itself by who has
 * checked in (both = split gradient, single = that person's tint),
 * rings "today", dims weekends, and stacks the day's vitamin rows.
 */
export function CalendarCell({
  date,                   // day number; null/empty for padding cells
  weekend = false,
  holiday = null,         // holiday name -> renders as a "pause" day
  today = false,
  past = false,
  rows = [],              // [{ person, label, checked, onChange }]
  empty = false,
  style = {},
  ...rest
}) {
  if (empty) {
    return <div style={{ minHeight: 'var(--cell-min-h)', borderRadius: 'var(--radius-sm)', ...style }} />;
  }

  const pause = weekend || !!holiday;
  const jChk = rows.find(r => r.person === 'junghwa')?.checked;
  const hChk = rows.find(r => r.person === 'haein')?.checked;

  let background = 'var(--surface)';
  let borderColor = 'var(--border)';
  if (weekend) background = 'var(--weekend-bg)';
  if (holiday) background = 'var(--accent-2-light)';
  if (!pause) {
    if (jChk && hChk) {
      background = 'linear-gradient(135deg, var(--accent-light) 50%, var(--accent-2-light) 50%)';
      borderColor = 'var(--accent-mid)';
    } else if (jChk) {
      background = 'var(--accent-light)'; borderColor = 'var(--accent-mid)';
    } else if (hChk) {
      background = 'var(--accent-2-light)'; borderColor = 'var(--accent-2-mid)';
    }
  }

  return (
    <div
      style={{
        minHeight: 'var(--cell-min-h)',
        borderRadius: 'var(--radius-sm)',
        border: today ? '1.5px solid var(--accent)' : `1px solid ${borderColor}`,
        padding: '6px 7px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        background,
        transition: 'border-color var(--dur-fast), background var(--dur-fast)',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-sm)',
        fontWeight: today ? 'var(--fw-bold)' : 'var(--fw-medium)',
        lineHeight: 1,
        color: today ? 'var(--accent-deep)' : pause ? 'var(--text-faint)' : 'var(--text-muted)',
      }}>
        {date}
      </div>
      {holiday && (
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: 3, marginTop: 1,
          fontSize: 'var(--fs-2xs)', lineHeight: 'var(--lh-snug)',
          color: 'var(--accent-2-deep)', fontWeight: 'var(--fw-medium)',
        }}>
          <span aria-hidden="true">🍁</span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{holiday}</span>
        </div>
      )}
      {!pause && rows.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 1 }}>
          {rows.map((r, i) => (
            <VitaminCheck
              key={i}
              person={r.person}
              label={r.label}
              checked={r.checked}
              missed={past}
              onChange={r.onChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
