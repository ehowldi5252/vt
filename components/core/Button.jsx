import React from 'react';

/**
 * Button — the app's only button is the small square calendar nav
 * control, plus a soft-tinted action variant. Hairline border,
 * tinted hover, gentle press.
 */
export function Button({
  children,
  variant = 'default',   // 'default' | 'primary' | 'pink' | 'ghost'
  size = 'md',           // 'sm' | 'md' | 'icon'
  person,                // 'junghwa' | 'haein' — overrides accent hue
  disabled = false,
  style = {},
  ...rest
}) {
  const hue =
    person === 'junghwa' ? 'var(--accent)' :
    person === 'haein'   ? 'var(--accent-2)' :
    variant === 'pink'   ? 'var(--accent-2)' : 'var(--accent)';
  const hueLight =
    person === 'haein' || variant === 'pink'
      ? 'var(--accent-2-light)' : 'var(--accent-light)';
  const hueDeep =
    person === 'haein' || variant === 'pink'
      ? 'var(--accent-2-deep)' : 'var(--accent-deep)';
  const hueOn =
    person === 'haein' || variant === 'pink'
      ? 'var(--on-accent-2)' : 'var(--on-accent)';

  const sizes = {
    sm:   { padding: '5px 12px', fontSize: 'var(--fs-xs)', minHeight: 28 },
    md:   { padding: '8px 18px', fontSize: 'var(--fs-base)', minHeight: 36 },
    icon: { width: 30, height: 30, padding: 0, fontSize: 16 },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 1,
    borderRadius: size === 'icon' ? 'var(--radius-sm)' : 'var(--radius-pill)',
    border: '1px solid var(--border)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast), border-color var(--dur-fast), color var(--dur-fast), transform var(--dur-fast)',
    whiteSpace: 'nowrap',
    ...sizes[size],
  };

  const variants = {
    default: { background: 'var(--surface)', color: 'var(--text-muted)' },
    ghost:   { background: 'transparent', borderColor: 'transparent', color: 'var(--text-muted)' },
    primary: { background: hue, borderColor: hue, color: hueOn },
    pink:    { background: 'var(--accent-2)', borderColor: 'var(--accent-2)', color: 'var(--on-accent-2)' },
  };

  const isSolid = variant === 'primary' || variant === 'pink';

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverStyle = hover && !disabled
    ? (isSolid
        ? { filter: 'brightness(0.94)' }
        : { background: hueLight, borderColor: hue, color: hueDeep })
    : {};
  const activeStyle = active && !disabled ? { transform: 'scale(0.96)' } : {};

  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle, ...activeStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
