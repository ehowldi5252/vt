/* @ds-bundle: {"format":3,"namespace":"VitaminCalendarDesignSystem_00e06a","components":[{"name":"CalendarCell","sourcePath":"components/calendar/CalendarCell.jsx"},{"name":"StatGroup","sourcePath":"components/calendar/StatGroup.jsx"},{"name":"VitaminCheck","sourcePath":"components/calendar/VitaminCheck.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"NameTag","sourcePath":"components/core/NameTag.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"SyncBadge","sourcePath":"components/core/SyncBadge.jsx"}],"sourceHashes":{"components/calendar/CalendarCell.jsx":"086d58cc884d","components/calendar/StatGroup.jsx":"f0698dc6847a","components/calendar/VitaminCheck.jsx":"6b202a360ff0","components/core/Button.jsx":"6e4209834a09","components/core/Card.jsx":"9e7b88ecc7bf","components/core/NameTag.jsx":"4a2b412f5435","components/core/ProgressBar.jsx":"c453edf8869e","components/core/SyncBadge.jsx":"b263d4bc0379","ui_kits/vitamin-calendar/App.jsx":"b113d635ba94","ui_kits/vitamin-calendar/MobileApp.jsx":"8b85cd091624","ui_kits/vitamin-calendar/config.js":"447b4a937bdb","ui_kits/vitamin-calendar/holidays.js":"1c162007f308","ui_kits/vitamin-calendar/ios-frame.jsx":"be3343be4b51","ui_kits/vitamin-calendar/storage.js":"057681be2356","ui_kits/vitamin-calendar/themes.js":"08d106b7c441","ui_kits/vitamin-calendar/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VitaminCalendarDesignSystem_00e06a = window.VitaminCalendarDesignSystem_00e06a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/calendar/VitaminCheck.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VitaminCheck — one tappable vitamin row: a hue-accented checkbox
 * plus a label that strikes through when done, with a soft "missed"
 * dot for past, unchecked days.
 */
function VitaminCheck({
  label,
  person = 'junghwa',
  // 'junghwa' | 'haein'
  checked = false,
  missed = false,
  onChange,
  style = {},
  ...rest
}) {
  const isJ = person !== 'haein';
  const hue = isJ ? 'var(--accent-deep)' : 'var(--accent-2-deep)';
  const fill = isJ ? 'var(--accent)' : 'var(--accent-2)';
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      cursor: 'pointer',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      flexShrink: 0,
      background: 'var(--status-missed)',
      visibility: missed && !checked ? 'visible' : 'hidden'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      width: 12,
      height: 12,
      margin: 0,
      flexShrink: 0,
      cursor: 'pointer',
      accentColor: fill
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-2xs)',
      lineHeight: 'var(--lh-snug)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: checked ? hue : 'var(--text-muted)',
      textDecoration: checked ? 'line-through' : 'none',
      transition: 'color var(--dur-fast)'
    }
  }, label));
}
Object.assign(__ds_scope, { VitaminCheck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/VitaminCheck.jsx", error: String((e && e.message) || e) }); }

// components/calendar/CalendarCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CalendarCell — one day in the month grid. Tints itself by who has
 * checked in (both = split gradient, single = that person's tint),
 * rings "today", dims weekends, and stacks the day's vitamin rows.
 */
function CalendarCell({
  date,
  // day number; null/empty for padding cells
  weekend = false,
  holiday = null,
  // holiday name -> renders as a "pause" day
  today = false,
  past = false,
  rows = [],
  // [{ person, label, checked, onChange }]
  empty = false,
  style = {},
  ...rest
}) {
  if (empty) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 'var(--cell-min-h)',
        borderRadius: 'var(--radius-sm)',
        ...style
      }
    });
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
      background = 'var(--accent-light)';
      borderColor = 'var(--accent-mid)';
    } else if (hChk) {
      background = 'var(--accent-2-light)';
      borderColor = 'var(--accent-2-mid)';
    }
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      minHeight: 'var(--cell-min-h)',
      borderRadius: 'var(--radius-sm)',
      border: today ? '1.5px solid var(--accent)' : `1px solid ${borderColor}`,
      padding: '6px 7px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      background,
      transition: 'border-color var(--dur-fast), background var(--dur-fast)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-sm)',
      fontWeight: today ? 'var(--fw-bold)' : 'var(--fw-medium)',
      lineHeight: 1,
      color: today ? 'var(--accent-deep)' : pause ? 'var(--text-faint)' : 'var(--text-muted)'
    }
  }, date), holiday && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 3,
      marginTop: 1,
      fontSize: 'var(--fs-2xs)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--accent-2-deep)',
      fontWeight: 'var(--fw-medium)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83C\uDF41"), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, holiday)), !pause && rows.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      marginTop: 1
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(__ds_scope.VitaminCheck, {
    key: i,
    person: r.person,
    label: r.label,
    checked: r.checked,
    missed: past,
    onChange: r.onChange
  }))));
}
Object.assign(__ds_scope, { CalendarCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/CalendarCell.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the app's only button is the small square calendar nav
 * control, plus a soft-tinted action variant. Hairline border,
 * tinted hover, gentle press.
 */
function Button({
  children,
  variant = 'default',
  // 'default' | 'primary' | 'pink' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'icon'
  person,
  // 'junghwa' | 'haein' — overrides accent hue
  disabled = false,
  style = {},
  ...rest
}) {
  const hue = person === 'junghwa' ? 'var(--accent)' : person === 'haein' ? 'var(--accent-2)' : variant === 'pink' ? 'var(--accent-2)' : 'var(--accent)';
  const hueLight = person === 'haein' || variant === 'pink' ? 'var(--accent-2-light)' : 'var(--accent-light)';
  const hueDeep = person === 'haein' || variant === 'pink' ? 'var(--accent-2-deep)' : 'var(--accent-deep)';
  const hueOn = person === 'haein' || variant === 'pink' ? 'var(--on-accent-2)' : 'var(--on-accent)';
  const sizes = {
    sm: {
      padding: '5px 12px',
      fontSize: 'var(--fs-xs)',
      minHeight: 28
    },
    md: {
      padding: '8px 18px',
      fontSize: 'var(--fs-base)',
      minHeight: 36
    },
    icon: {
      width: 30,
      height: 30,
      padding: 0,
      fontSize: 16
    }
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
    ...sizes[size]
  };
  const variants = {
    default: {
      background: 'var(--surface)',
      color: 'var(--text-muted)'
    },
    ghost: {
      background: 'transparent',
      borderColor: 'transparent',
      color: 'var(--text-muted)'
    },
    primary: {
      background: hue,
      borderColor: hue,
      color: hueOn
    },
    pink: {
      background: 'var(--accent-2)',
      borderColor: 'var(--accent-2)',
      color: 'var(--on-accent-2)'
    }
  };
  const isSolid = variant === 'primary' || variant === 'pink';
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = hover && !disabled ? isSolid ? {
    filter: 'brightness(0.94)'
  } : {
    background: hueLight,
    borderColor: hue,
    color: hueDeep
  } : {};
  const activeStyle = active && !disabled ? {
    transform: 'scale(0.96)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...activeStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the white, hairline-bordered, softly-rounded surface that
 * every block in the app sits on (stats, progress, calendar).
 */
function Card({
  children,
  padding = 'md',
  // 'sm' | 'md' | 'lg'
  elevated = false,
  // add the soft tinted shadow
  style = {},
  ...rest
}) {
  const pads = {
    sm: '1rem 1.1rem',
    md: '1.25rem',
    lg: '1.5rem'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius)',
      padding: pads[padding],
      boxShadow: elevated ? 'var(--shadow-card)' : 'var(--shadow-none)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/NameTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NameTag — the pill that labels a person (정화 / 해인) in the
 * app's purple or pink tint. Also works as a generic soft badge.
 */
function NameTag({
  children,
  person,
  // 'junghwa' | 'haein'
  tone,
  // override: 'purple' | 'pink' | 'neutral'
  style = {},
  ...rest
}) {
  const resolved = tone ? tone : person === 'haein' ? 'pink' : person === 'junghwa' ? 'purple' : 'neutral';
  const tones = {
    purple: {
      background: 'var(--accent-light)',
      color: 'var(--accent-deep)'
    },
    pink: {
      background: 'var(--accent-2-light)',
      color: 'var(--accent-2-deep)'
    },
    neutral: {
      background: 'var(--surface-2)',
      color: 'var(--text-muted)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.4,
      ...tones[resolved],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { NameTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NameTag.jsx", error: String((e && e.message) || e) }); }

// components/calendar/StatGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatGroup — a person's monthly stat block: a NameTag header over
 * one or more big Gmarket-Sans numerals with small captions.
 */
function StatGroup({
  person = 'junghwa',
  // 'junghwa' | 'haein'
  name,
  // header name, e.g. '정화'
  caption = '이번 달',
  stats = [],
  // [{ value, label }]
  style = {},
  ...rest
}) {
  const isJ = person !== 'haein';
  const hue = isJ ? 'var(--accent-deep)' : 'var(--accent-2-deep)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius)',
      padding: '1rem 1.1rem',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 10,
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NameTag, {
    person: person
  }, name), caption), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-stat)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      color: hue
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-2xs)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, s.label)))));
}
Object.assign(__ds_scope, { StatGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/calendar/StatGroup.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProgressBar — the per-person dosage-rate bar. Recessed track,
 * gradient fill in the person's hue, animated width.
 */
function ProgressBar({
  value = 0,
  // 0–100
  person = 'junghwa',
  // 'junghwa' | 'haein'
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
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      ...style
    }
  }, rest), (label || showPct) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: deep
    }
  }, label), showPct && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-base)',
      fontWeight: 'var(--fw-bold)',
      color: deep
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      borderRadius: 'var(--radius-pill)',
      background: `linear-gradient(90deg, ${mid}, ${deep})`,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/SyncBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SyncBadge — the small status pill in the header. A colored dot
 * (loading pulses) plus a short label, on a hairline capsule.
 */
function SyncBadge({
  status = 'ok',
  // 'ok' | 'loading' | 'error' | 'idle'
  label,
  style = {},
  ...rest
}) {
  const map = {
    ok: {
      color: 'var(--status-ok)',
      text: '동기화 완료'
    },
    loading: {
      color: 'var(--status-loading)',
      text: '불러오는 중'
    },
    error: {
      color: 'var(--status-error)',
      text: '동기화 실패'
    },
    idle: {
      color: 'var(--text-faint)',
      text: '대기 중'
    }
  };
  const s = map[status] || map.idle;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      flexShrink: 0,
      background: s.color,
      animation: status === 'loading' ? 'vc-pulse 1s infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, label ?? s.text));
}
Object.assign(__ds_scope, { SyncBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SyncBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/App.jsx
try { (() => {
// VitaminCalendarApp — faithful recreation of the 비타민 체크 달력 app,
// composed from the design-system components. Interactive: toggle
// checks, watch cells tint + stats/streaks update, navigate months.
const {
  Button,
  NameTag,
  Card,
  ProgressBar,
  SyncBadge,
  StatGroup,
  CalendarCell
} = window.VitaminCalendarDesignSystem_00e06a;
const MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const DAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];
const PEOPLE = [{
  key: 'junghwa',
  name: '정화',
  label: '정화 비타민'
}, {
  key: 'haein',
  name: '해인',
  label: '해인 비타민'
}];
const dayKey = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
const isWeekday = (y, m, d) => {
  const w = new Date(y, m, d).getDay();
  return w >= 1 && w <= 5;
};

// Seed a believable month of history.
function seed() {
  const now = new Date();
  const y = now.getFullYear(),
    m = now.getMonth();
  const data = {};
  for (let d = 1; d < now.getDate(); d++) {
    if (!isWeekday(y, m, d)) continue;
    const k = dayKey(y, m, d);
    data[k] = {
      junghwa: Math.random() > 0.18,
      haein: Math.random() > 0.32
    };
  }
  return data;
}
function VitaminCalendarApp() {
  const today = React.useMemo(() => new Date(), []);
  const [viewY, setViewY] = React.useState(today.getFullYear());
  const [viewM, setViewM] = React.useState(today.getMonth());
  const [data, setData] = React.useState(seed);
  const [sync, setSync] = React.useState('ok');
  const [popped, setPopped] = React.useState(null);
  const saveTimer = React.useRef(null);
  const toggle = (y, m, d, person) => {
    const k = dayKey(y, m, d);
    setData(prev => ({
      ...prev,
      [k]: {
        ...prev[k],
        [person]: !prev[k]?.[person]
      }
    }));
    setPopped(k);
    setTimeout(() => setPopped(p => p === k ? null : p), 280);
    // simulate the debounced save → sync cycle
    setSync('loading');
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSync('ok'), 700);
  };
  const stats = person => {
    let checked = 0,
      total = 0;
    const days = new Date(viewY, viewM + 1, 0).getDate();
    for (let d = 1; d <= days; d++) {
      if (!isWeekday(viewY, viewM, d)) continue;
      if (window.VC_getHoliday(viewY, viewM, d)) continue;
      total++;
      if (data[dayKey(viewY, viewM, d)]?.[person]) checked++;
    }
    return {
      checked,
      total,
      pct: total > 0 ? Math.round(checked / total * 100) : 0
    };
  };
  const streak = person => {
    let s = 0;
    const cur = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    for (let i = 0; i < 365; i++) {
      const w = cur.getDay();
      const hol = window.VC_getHoliday(cur.getFullYear(), cur.getMonth(), cur.getDate());
      if (w >= 1 && w <= 5 && !hol) {
        if (data[dayKey(cur.getFullYear(), cur.getMonth(), cur.getDate())]?.[person]) s++;else break;
      }
      cur.setDate(cur.getDate() - 1);
    }
    return s;
  };
  const prevMonth = () => {
    let m = viewM - 1,
      y = viewY;
    if (m < 0) {
      m = 11;
      y--;
    }
    setViewM(m);
    setViewY(y);
  };
  const nextMonth = () => {
    let m = viewM + 1,
      y = viewY;
    if (m > 11) {
      m = 0;
      y++;
    }
    setViewM(m);
    setViewY(y);
  };
  const firstDow = new Date(viewY, viewM, 1).getDay();
  const daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(/*#__PURE__*/React.createElement(CalendarCell, {
    key: 'e' + i,
    empty: true
  }));
  for (let d = 1; d <= daysInMonth; d++) {
    const dow = new Date(viewY, viewM, d).getDay();
    const weekend = dow === 0 || dow === 6;
    const isToday = viewY === today.getFullYear() && viewM === today.getMonth() && d === today.getDate();
    const past = new Date(viewY, viewM, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const holiday = window.VC_getHoliday(viewY, viewM, d);
    const k = dayKey(viewY, viewM, d);
    cells.push(/*#__PURE__*/React.createElement(CalendarCell, {
      key: k,
      date: d,
      weekend: weekend,
      holiday: holiday,
      today: isToday,
      past: past,
      style: popped === k ? {
        animation: 'vc-pop .22s var(--ease-out)'
      } : undefined,
      rows: weekend || holiday ? [] : PEOPLE.map(p => ({
        person: p.key,
        label: p.label,
        checked: !!data[k]?.[p.key],
        onChange: () => toggle(viewY, viewM, d, p.key)
      }))
    }));
  }
  const jS = stats('junghwa'),
    hS = stats('haein');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '2rem 1rem 4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.75rem',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      background: 'var(--accent)',
      borderRadius: 11,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    }
  }, "\uD83D\uDC8A"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: '-.3px',
      margin: 0,
      color: 'var(--text)'
    }
  }, "\uBE44\uD0C0\uBBFC \uCCB4\uD06C \uB2EC\uB825"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      margin: '1px 0 0'
    }
  }, "\uC815\uD654 & \uD574\uC778\uC758 \uB9E4\uC77C \uBE44\uD0C0\uBBFC"))), /*#__PURE__*/React.createElement(SyncBadge, {
    status: sync
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: '1.25rem'
    }
  }, [['j', '정화 체크', 'var(--accent-light)', 'var(--accent-mid)'], ['h', '해인 체크', 'var(--accent-2-light)', 'var(--accent-2-mid)']].map(([k, t, bg, bd]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: bg,
      border: `1.5px solid ${bd}`
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 10,
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(StatGroup, {
    person: "junghwa",
    name: "\uC815\uD654",
    stats: [{
      value: jS.checked,
      label: '복용 완료'
    }, {
      value: streak('junghwa'),
      label: '연속 복용일'
    }]
  }), /*#__PURE__*/React.createElement(StatGroup, {
    person: "haein",
    name: "\uD574\uC778",
    stats: [{
      value: hS.checked,
      label: '복용 완료'
    }, {
      value: streak('haein'),
      label: '연속 복용일'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    style: {
      marginBottom: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    person: "junghwa",
    label: "\uC815\uD654 \uBCF5\uC6A9\uB960",
    value: jS.pct
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    person: "haein",
    label: "\uD574\uC778 \uBCF5\uC6A9\uB960",
    value: hS.pct
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    onClick: prevMonth
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text)'
    }
  }, viewY, "\uB144 ", MONTHS[viewM]), /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    onClick: nextMonth
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 4,
      marginBottom: 4
    }
  }, DAY_LABELS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: 'center',
      fontSize: 11,
      fontWeight: 500,
      padding: '3px 0 5px',
      color: i === 0 || i === 6 ? 'var(--text-faint)' : 'var(--text-muted)'
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 4
    }
  }, cells)), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 11,
      color: 'var(--text-faint)',
      marginTop: '1.5rem'
    }
  }, "\u2726 Netlify Blobs \uC800\uC7A5 \xB7 30\uCD08\uB9C8\uB2E4 \uC790\uB3D9 \uB3D9\uAE30\uD654 \u2726"));
}
window.VitaminCalendarApp = VitaminCalendarApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/MobileApp.jsx
try { (() => {
// MobileApp — iPhone Safari version of 비타민 체크 달력.
// Vertical day-list instead of a month grid; live color-theme switching
// via the Tweaks panel. Composes the design-system components.
const {
  Card,
  ProgressBar,
  SyncBadge,
  StatGroup
} = window.VitaminCalendarDesignSystem_00e06a;
const M_MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const M_DOW = ['일', '월', '화', '수', '목', '금', '토'];
const M_PEOPLE = [{
  key: 'junghwa',
  name: '정화'
}, {
  key: 'haein',
  name: '해인'
}];
const mKey = (y, m, d) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
const mWeekday = (y, m, d) => {
  const w = new Date(y, m, d).getDay();
  return w >= 1 && w <= 5;
};

// One person's tap-toggle pill inside a day row.
function PersonToggle({
  person,
  name,
  checked,
  missed,
  onToggle
}) {
  const isJ = person !== 'haein';
  const hue = isJ ? 'var(--accent)' : 'var(--accent-2)';
  const mid = isJ ? 'var(--accent-mid)' : 'var(--accent-2-mid)';
  const tint = isJ ? 'var(--accent-light)' : 'var(--accent-2-light)';
  const on = isJ ? 'var(--on-accent)' : 'var(--on-accent-2)';
  const [bump, setBump] = React.useState(false);
  const tap = () => {
    onToggle();
    if (!checked) {
      setBump(true);
      setTimeout(() => setBump(false), 240);
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: tap,
    style: {
      flex: 1,
      minWidth: 0,
      height: 46,
      borderRadius: 11,
      cursor: 'pointer',
      border: `1.5px solid ${checked ? hue : 'var(--border)'}`,
      background: checked ? hue : 'var(--surface)',
      color: checked ? on : 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      transition: 'background .18s var(--ease-out), border-color .18s var(--ease-out), color .18s var(--ease-out)',
      transform: bump ? 'scale(1.05)' : 'scale(1)',
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 17,
      height: 17,
      borderRadius: '50%',
      flexShrink: 0,
      border: `1.5px solid ${checked ? on : missed ? mid : 'var(--text-faint)'}`,
      background: !checked && missed ? tint : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 11,
      lineHeight: 1
    }
  }, checked ? '✓' : ''), name);
}
function DayRow({
  y,
  m,
  d,
  isToday,
  past,
  weekend,
  holiday,
  rows,
  onToggle,
  todayStyle = 'circle'
}) {
  const dow = new Date(y, m, d).getDay();
  const dowColor = dow === 0 ? 'var(--accent-2-deep)' : dow === 6 ? 'var(--accent-deep)' : 'var(--text-muted)';
  const pause = weekend || !!holiday;
  const ringToday = isToday && todayStyle === 'ring';
  const circleToday = isToday && todayStyle === 'circle';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: holiday ? 'var(--accent-2-light)' : isToday ? 'var(--accent-light)' : 'var(--surface)',
      border: ringToday ? '1px solid var(--accent-mid)' : '1px solid var(--border)',
      borderRadius: 14,
      padding: '11px 13px',
      boxSizing: 'border-box',
      opacity: weekend ? 0.62 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3
    }
  }, circleToday ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1
    }
  }, d) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 700,
      lineHeight: 1,
      color: isToday ? 'var(--accent-deep)' : 'var(--text)'
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 11,
      fontWeight: 500,
      color: isToday ? 'var(--accent-deep)' : dowColor
    }
  }, isToday && todayStyle === 'dot' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), M_DOW[dow])), holiday ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--accent-2-deep)',
      paddingLeft: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83C\uDF41"), holiday) : weekend ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12.5,
      color: 'var(--text-faint)',
      paddingLeft: 2
    }
  }, "\uC8FC\uB9D0 \xB7 \uD734\uC2DD") : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      gap: 8
    }
  }, M_PEOPLE.map(p => /*#__PURE__*/React.createElement(PersonToggle, {
    key: p.key,
    person: p.key,
    name: p.name,
    checked: !!rows[p.key],
    missed: past && !rows[p.key],
    onToggle: () => onToggle(p.key)
  }))));
}
function MobileApp({
  theme = 'sage',
  showWeekends = true,
  todayStyle = 'circle'
}) {
  const today = React.useMemo(() => new Date(), []);
  const [viewY, setViewY] = React.useState(today.getFullYear());
  const [viewM, setViewM] = React.useState(today.getMonth());
  const [data, setData] = React.useState({});
  const [sync, setSync] = React.useState(window.VC_store && window.VC_store.configured() ? 'loading' : 'idle');
  const saveTimer = React.useRef(null);
  const dataRef = React.useRef(data);
  const savingRef = React.useRef(false);
  dataRef.current = data;

  // Initial load + periodic poll to pull the other person's changes.
  React.useEffect(() => {
    const store = window.VC_store;
    if (!store || !store.configured()) return;
    let alive = true;
    const pull = initial => {
      if (initial) setSync('loading');
      store.load().then(rec => {
        if (alive && !savingRef.current) {
          setData(rec);
          setSync('ok');
        }
      }).catch(() => {
        if (alive) setSync('error');
      });
    };
    pull(true);
    const secs = window.VC_CONFIG && window.VC_CONFIG.pollSeconds || 30;
    const id = setInterval(() => pull(false), secs * 1000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);
  const persist = () => {
    const store = window.VC_store;
    if (!store || !store.configured()) return; // local-only mode
    setSync('loading');
    savingRef.current = true;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      store.save(dataRef.current).then(() => setSync('ok')).catch(() => setSync('error')).finally(() => {
        savingRef.current = false;
      });
    }, 600);
  };
  const toggle = (y, m, d, person) => {
    const k = mKey(y, m, d);
    setData(prev => ({
      ...prev,
      [k]: {
        ...prev[k],
        [person]: !prev[k]?.[person]
      }
    }));
    persist();
  };
  const stat = person => {
    let checked = 0,
      total = 0;
    const days = new Date(viewY, viewM + 1, 0).getDate();
    for (let d = 1; d <= days; d++) {
      if (!mWeekday(viewY, viewM, d)) continue;
      if (window.VC_getHoliday(viewY, viewM, d)) continue;
      total++;
      if (data[mKey(viewY, viewM, d)]?.[person]) checked++;
    }
    return {
      checked,
      pct: total ? Math.round(checked / total * 100) : 0
    };
  };
  const streak = person => {
    let s = 0;
    const cur = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    for (let i = 0; i < 365; i++) {
      const w = cur.getDay();
      const hol = window.VC_getHoliday(cur.getFullYear(), cur.getMonth(), cur.getDate());
      if (w >= 1 && w <= 5 && !hol) {
        if (data[mKey(cur.getFullYear(), cur.getMonth(), cur.getDate())]?.[person]) s++;else break;
      }
      cur.setDate(cur.getDate() - 1);
    }
    return s;
  };
  const prevMonth = () => {
    let m = viewM - 1,
      y = viewY;
    if (m < 0) {
      m = 11;
      y--;
    }
    setViewM(m);
    setViewY(y);
  };
  const nextMonth = () => {
    let m = viewM + 1,
      y = viewY;
    if (m > 11) {
      m = 0;
      y++;
    }
    setViewM(m);
    setViewY(y);
  };
  const daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
  const dayRows = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const weekend = !mWeekday(viewY, viewM, d);
    if (weekend && !showWeekends) continue;
    const isToday = viewY === today.getFullYear() && viewM === today.getMonth() && d === today.getDate();
    const past = new Date(viewY, viewM, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const holiday = window.VC_getHoliday(viewY, viewM, d);
    const k = mKey(viewY, viewM, d);
    dayRows.push(/*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement(DayRow, {
      y: viewY,
      m: viewM,
      d: d,
      isToday: isToday,
      past: past,
      weekend: weekend,
      holiday: holiday,
      todayStyle: todayStyle,
      rows: data[k] || {},
      onToggle: person => toggle(viewY, viewM, d, person)
    })));
  }
  const jS = stat('junghwa'),
    hS = stat('haein');
  const themeVars = window.VC_themeVars(theme);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...themeVars,
      minHeight: '100%',
      background: 'var(--bg)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text)',
      padding: '64px 16px 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18,
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      background: 'var(--accent)',
      borderRadius: 11,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 19,
      flexShrink: 0
    }
  }, "\uD83D\uDC8A"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-.3px',
      margin: 0
    }
  }, "\uBE44\uD0C0\uBBFC \uCCB4\uD06C \uB2EC\uB825"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)',
      margin: '1px 0 0'
    }
  }, "\uC815\uD654 & \uD574\uC778\uC758 \uB9E4\uC77C \uBE44\uD0C0\uBBFC"))), /*#__PURE__*/React.createElement(SyncBadge, {
    status: sync,
    label: sync === 'idle' ? '로컬 전용' : undefined
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 9,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(StatGroup, {
    person: "junghwa",
    name: "\uC815\uD654",
    stats: [{
      value: jS.checked,
      label: '복용'
    }, {
      value: streak('junghwa'),
      label: '연속'
    }]
  }), /*#__PURE__*/React.createElement(StatGroup, {
    person: "haein",
    name: "\uD574\uC778",
    stats: [{
      value: hS.checked,
      label: '복용'
    }, {
      value: streak('haein'),
      label: '연속'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    style: {
      marginBottom: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    person: "junghwa",
    label: "\uC815\uD654 \uBCF5\uC6A9\uB960",
    value: jS.pct
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    person: "haein",
    label: "\uD574\uC778 \uBCF5\uC6A9\uB960",
    value: hS.pct
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
      padding: '0 2px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prevMonth,
    style: navBtn
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700
    }
  }, viewY, "\uB144 ", M_MONTHS[viewM]), /*#__PURE__*/React.createElement("button", {
    onClick: nextMonth,
    style: navBtn
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, dayRows));
}
const navBtn = {
  width: 32,
  height: 32,
  borderRadius: 9,
  border: '1px solid var(--border)',
  background: 'var(--surface)',
  color: 'var(--text-muted)',
  fontSize: 17,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent'
};
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/config.js
try { (() => {
// ─────────────────────────────────────────────────────────────
// jsonbin.io connection — FILL THIS IN before you upload.
//
// 1. Create ONE new bin at https://jsonbin.io with initial content: {}
//    Copy its Bin ID into `binId` below.
// 2. Create an ACCESS KEY (Dashboard → API Keys) with Bin/Read + Bin/Update
//    permission. Copy it into `key` below. Do NOT use your Master Key here —
//    this file is public on GitHub Pages and anyone can read it.
//
// Leave the fields blank to run the app in local-only mode (nothing saved).
// ─────────────────────────────────────────────────────────────
window.VC_CONFIG = {
  binId: "",
  // e.g. "66f0a1b2ac...."
  key: "",
  // your X-Access-Key
  keyHeader: "X-Access-Key",
  pollSeconds: 30 // how often to pull the other person's changes
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/config.js", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/holidays.js
try { (() => {
// Ontario (Canada) statutory holidays — computed per year so the calendar
// works across any month/year you navigate to. These are treated as
// "pause" days (like weekends): no vitamins expected, excluded from
// dose-rate and streak math.
//
// The 9 ESA statutory holidays in Ontario. (Civic Holiday, Remembrance Day
// and Easter Monday are NOT statutory holidays in Ontario, so they're omitted.)
(function () {
  const key = (y, m0, d) => `${y}-${String(m0 + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  // nth Monday (weekday=1) of a month
  function nthWeekday(y, m0, weekday, n) {
    let count = 0;
    for (let d = 1; d <= 31; d++) {
      const dt = new Date(y, m0, d);
      if (dt.getMonth() !== m0) break;
      if (dt.getDay() === weekday) {
        count++;
        if (count === n) return d;
      }
    }
    return null;
  }
  // latest `weekday` on or before `day`
  function weekdayOnOrBefore(y, m0, day, weekday) {
    for (let d = day; d >= 1; d--) if (new Date(y, m0, d).getDay() === weekday) return d;
    return null;
  }
  // Easter Sunday (Anonymous Gregorian computus)
  function easter(year) {
    const a = year % 19,
      b = Math.floor(year / 100),
      c = year % 100,
      d = Math.floor(b / 4),
      e = b % 4,
      f = Math.floor((b + 8) / 25),
      g = Math.floor((b - f + 1) / 3),
      h = (19 * a + b - d - g + 15) % 30,
      i = Math.floor(c / 4),
      k = c % 4,
      l = (32 + 2 * e + 2 * i - h - k) % 7,
      m = Math.floor((a + 11 * h + 22 * l) / 451),
      month = Math.floor((h + l - 7 * m + 114) / 31),
      day = (h + l - 7 * m + 114) % 31 + 1;
    return new Date(year, month - 1, day);
  }
  const cache = {};
  // → { 'YYYY-MM-DD': 'Holiday Name' }
  function ontarioHolidays(year) {
    if (cache[year]) return cache[year];
    const h = {};
    h[key(year, 0, 1)] = 'New Year\u2019s Day';
    h[key(year, 1, nthWeekday(year, 1, 1, 3))] = 'Family Day';
    const gf = easter(year);
    gf.setDate(gf.getDate() - 2);
    h[key(gf.getFullYear(), gf.getMonth(), gf.getDate())] = 'Good Friday';
    h[key(year, 4, weekdayOnOrBefore(year, 4, 24, 1))] = 'Victoria Day';
    h[key(year, 6, 1)] = 'Canada Day';
    h[key(year, 8, nthWeekday(year, 8, 1, 1))] = 'Labour Day';
    h[key(year, 9, nthWeekday(year, 9, 1, 2))] = 'Thanksgiving';
    h[key(year, 11, 25)] = 'Christmas Day';
    h[key(year, 11, 26)] = 'Boxing Day';
    cache[year] = h;
    return h;
  }
  window.VC_ontarioHolidays = ontarioHolidays;
  // Holiday name for a given y / month0 / day, or null.
  window.VC_getHoliday = (y, m0, d) => ontarioHolidays(y)[key(y, m0, d)] || null;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/holidays.js", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/storage.js
try { (() => {
// jsonbin.io storage layer for the Vitamin Calendar.
// Reads/writes the whole tracker object: { "YYYY-MM-DD": { junghwa, haein } }.
(function () {
  const cfg = () => window.VC_CONFIG || {};
  const base = 'https://api.jsonbin.io/v3/b';
  const VC_store = {
    // true only when a bin + key are configured
    configured() {
      const c = cfg();
      return !!(c.binId && c.key);
    },
    // GET latest record → object (empty {} if the bin is blank)
    async load() {
      const c = cfg();
      const r = await fetch(`${base}/${c.binId}/latest`, {
        headers: {
          [c.keyHeader || 'X-Access-Key']: c.key
        }
      });
      if (!r.ok) throw new Error('jsonbin load failed: ' + r.status);
      const j = await r.json();
      const rec = j && j.record;
      return rec && typeof rec === 'object' && !Array.isArray(rec) ? rec : {};
    },
    // PUT the full object back to the bin
    async save(data) {
      const c = cfg();
      const r = await fetch(`${base}/${c.binId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          [c.keyHeader || 'X-Access-Key']: c.key
        },
        body: JSON.stringify(data)
      });
      if (!r.ok) throw new Error('jsonbin save failed: ' + r.status);
      return true;
    }
  };
  window.VC_store = VC_store;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/storage.js", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/themes.js
try { (() => {
// Color themes for the Vitamin Calendar. Each maps onto the design-system
// custom properties; setting them on the app root re-tints every component.
// Two distinct hues — one per person (정화 / 해인) — on warm paper.
//
// Per person:  accent (fills), mid (gradient/tint), light (cell tint),
//              deep (text on white — numerals/labels), on (text on the fill).
window.VC_THEMES = {
  matcha: {
    label: 'Matcha & Peach',
    bg: '#f8f8f4',
    weekend: '#f2f4ee',
    j: {
      accent: '#BACD92',
      mid: '#cfe0a8',
      light: '#eef4e2',
      deep: '#5f7a35',
      on: '#2c3416'
    },
    h: {
      accent: '#F5DAD2',
      mid: '#f6c9bd',
      light: '#fdf3ef',
      deep: '#c06b50',
      on: '#5e342a'
    }
  },
  lavender: {
    label: 'Lavender & Rose',
    bg: '#faf9f6',
    weekend: '#f8f7fb',
    j: {
      accent: '#6c63b6',
      mid: '#a59dd4',
      light: '#ede9fb',
      deep: '#5b51a3',
      on: '#ffffff'
    },
    h: {
      accent: '#e07a8f',
      mid: '#ebb8c3',
      light: '#fdeef1',
      deep: '#c75e74',
      on: '#ffffff'
    }
  },
  sage: {
    label: 'Sage & Amber',
    bg: '#f7f8f6',
    weekend: '#f3f6f3',
    j: {
      accent: '#3a8a6e',
      mid: '#9bc4b3',
      light: '#e3f1ec',
      deep: '#2f7259',
      on: '#ffffff'
    },
    h: {
      accent: '#e0913a',
      mid: '#eccb9c',
      light: '#fbf0e2',
      deep: '#bf7521',
      on: '#ffffff'
    }
  },
  ocean: {
    label: 'Ocean & Teal',
    bg: '#f6f8fa',
    weekend: '#eef3f7',
    j: {
      accent: '#2f6fb0',
      mid: '#a3c1de',
      light: '#e6eef6',
      deep: '#235688',
      on: '#ffffff'
    },
    h: {
      accent: '#3fa89c',
      mid: '#a9d6cf',
      light: '#e4f3f0',
      deep: '#2f8377',
      on: '#ffffff'
    }
  },
  terracotta: {
    label: 'Terracotta & Olive',
    bg: '#faf8f5',
    weekend: '#f4f1ea',
    j: {
      accent: '#c2683f',
      mid: '#e0b39e',
      light: '#f8ece4',
      deep: '#a14f2c',
      on: '#ffffff'
    },
    h: {
      accent: '#7a8a4a',
      mid: '#c2c9a3',
      light: '#eef0e3',
      deep: '#5f6c39',
      on: '#ffffff'
    }
  },
  indigo: {
    label: 'Indigo & Slate',
    bg: '#f9f9fb',
    weekend: '#f1f1f6',
    j: {
      accent: '#4b4f8a',
      mid: '#aeb0cf',
      light: '#e8e9f2',
      deep: '#3a3d6e',
      on: '#ffffff'
    },
    h: {
      accent: '#5e8a8f',
      mid: '#b4ced0',
      light: '#e6f0f1',
      deep: '#476c70',
      on: '#ffffff'
    }
  }
};

// Turn a theme into a style object of CSS custom-property overrides.
window.VC_themeVars = function (key) {
  const t = window.VC_THEMES[key] || window.VC_THEMES.matcha;
  return {
    '--bg': t.bg,
    '--weekend-bg': t.weekend,
    '--accent': t.j.accent,
    '--accent-mid': t.j.mid,
    '--accent-light': t.j.light,
    '--accent-deep': t.j.deep,
    '--on-accent': t.j.on,
    '--accent-2': t.h.accent,
    '--accent-2-mid': t.h.mid,
    '--accent-2-light': t.h.light,
    '--accent-2-deep': t.h.deep,
    '--on-accent-2': t.h.on,
    '--status-error': t.h.deep,
    '--status-missed': t.h.mid
  };
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/themes.js", error: String((e && e.message) || e) }); }

// ui_kits/vitamin-calendar/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vitamin-calendar/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CalendarCell = __ds_scope.CalendarCell;

__ds_ns.StatGroup = __ds_scope.StatGroup;

__ds_ns.VitaminCheck = __ds_scope.VitaminCheck;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.NameTag = __ds_scope.NameTag;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SyncBadge = __ds_scope.SyncBadge;

})();
