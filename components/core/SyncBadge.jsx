import React from 'react';

/**
 * SyncBadge — the small status pill in the header. A colored dot
 * (loading pulses) plus a short label, on a hairline capsule.
 */
export function SyncBadge({
  status = 'ok',          // 'ok' | 'loading' | 'error' | 'idle'
  label,
  style = {},
  ...rest
}) {
  const map = {
    ok:      { color: 'var(--status-ok)',      text: '동기화 완료' },
    loading: { color: 'var(--status-loading)', text: '불러오는 중' },
    error:   { color: 'var(--status-error)',   text: '동기화 실패' },
    idle:    { color: 'var(--text-faint)',     text: '대기 중' },
  };
  const s = map[status] || map.idle;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-muted)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 10px',
        ...style,
      }}
      {...rest}
    >
      <span style={{
        width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
        background: s.color,
        animation: status === 'loading' ? 'vc-pulse 1s infinite' : 'none',
      }} />
      <span>{label ?? s.text}</span>
    </div>
  );
}
