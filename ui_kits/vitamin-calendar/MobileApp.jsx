// MobileApp — iPhone Safari version of 비타민 체크 달력.
// Vertical day-list instead of a month grid; live color-theme switching
// via the Tweaks panel. Composes the design-system components.
const { Card, ProgressBar, SyncBadge, StatGroup } = window.VitaminCalendarDesignSystem_00e06a;

const M_MONTHS = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const M_DOW = ['일','월','화','수','목','금','토'];
const M_PEOPLE = [
  { key: 'junghwa', name: '정화' },
  { key: 'haein',   name: '해인' },
];

const mKey = (y, m, d) => `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
const mWeekday = (y, m, d) => { const w = new Date(y,m,d).getDay(); return w >= 1 && w <= 5; };

// One person's tap-toggle pill inside a day row.
function PersonToggle({ person, name, checked, missed, onToggle }) {
  const isJ = person !== 'haein';
  const hue = isJ ? 'var(--accent)' : 'var(--accent-2)';
  const mid = isJ ? 'var(--accent-mid)' : 'var(--accent-2-mid)';
  const tint = isJ ? 'var(--accent-light)' : 'var(--accent-2-light)';
  const on = isJ ? 'var(--on-accent)' : 'var(--on-accent-2)';
  const [bump, setBump] = React.useState(false);
  const tap = () => { onToggle(); if (!checked) { setBump(true); setTimeout(() => setBump(false), 240); } };
  return (
    <button
      onClick={tap}
      style={{
        flex: 1, minWidth: 0, height: 46, borderRadius: 11, cursor: 'pointer',
        border: `1.5px solid ${checked ? hue : 'var(--border)'}`,
        background: checked ? hue : 'var(--surface)',
        color: checked ? on : 'var(--text-muted)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
        transition: 'background .18s var(--ease-out), border-color .18s var(--ease-out), color .18s var(--ease-out)',
        transform: bump ? 'scale(1.05)' : 'scale(1)',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      <span style={{
        width: 17, height: 17, borderRadius: '50%', flexShrink: 0,
        border: `1.5px solid ${checked ? on : missed ? mid : 'var(--text-faint)'}`,
        background: !checked && missed ? tint : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, lineHeight: 1,
      }}>{checked ? '✓' : ''}</span>
      {name}
    </button>
  );
}

function DayRow({ y, m, d, isToday, past, weekend, holiday, rows, onToggle, todayStyle = 'circle' }) {
  const dow = new Date(y, m, d).getDay();
  const dowColor = dow === 0 ? 'var(--accent-2-deep)' : dow === 6 ? 'var(--accent-deep)' : 'var(--text-muted)';
  const pause = weekend || !!holiday;
  const ringToday = isToday && todayStyle === 'ring';
  const circleToday = isToday && todayStyle === 'circle';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      background: holiday ? 'var(--accent-2-light)' : isToday ? 'var(--accent-light)' : 'var(--surface)',
      border: ringToday ? '1px solid var(--accent-mid)' : '1px solid var(--border)',
      borderRadius: 14, padding: '11px 13px', boxSizing: 'border-box',
      opacity: weekend ? 0.62 : 1,
    }}>
      {/* date block */}
      <div style={{ width: 40, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        {circleToday ? (
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            background: 'var(--accent)', color: 'var(--on-accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, lineHeight: 1,
          }}>{d}</div>
        ) : (
          <div style={{
            height: 30, display: 'flex', alignItems: 'center',
            fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, lineHeight: 1,
            color: isToday ? 'var(--accent-deep)' : 'var(--text)',
          }}>{d}</div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, fontWeight: 500, color: isToday ? 'var(--accent-deep)' : dowColor }}>
          {isToday && todayStyle === 'dot' && (
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />
          )}
          {M_DOW[dow]}
        </div>
      </div>
      {/* toggles, holiday, or weekend note */}
      {holiday ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 500, color: 'var(--accent-2-deep)', paddingLeft: 2 }}>
          <span aria-hidden="true">🍁</span>{holiday}
        </div>
      ) : weekend ? (
        <div style={{ flex: 1, fontSize: 12.5, color: 'var(--text-faint)', paddingLeft: 2 }}>주말 · 휴식</div>
      ) : (
        <div style={{ flex: 1, display: 'flex', gap: 8 }}>
          {M_PEOPLE.map(p => (
            <PersonToggle
              key={p.key}
              person={p.key}
              name={p.name}
              checked={!!rows[p.key]}
              missed={past && !rows[p.key]}
              onToggle={() => onToggle(p.key)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileApp({ theme = 'sage', showWeekends = true, todayStyle = 'circle', framed = true }) {
  const today = React.useMemo(() => new Date(), []);
  const [viewY, setViewY] = React.useState(today.getFullYear());
  const [viewM, setViewM] = React.useState(today.getMonth());
  const [data, setData] = React.useState({});
  const [sync, setSync] = React.useState(
    (window.VC_store && window.VC_store.configured()) ? 'loading' : 'idle'
  );
  const saveTimer = React.useRef(null);
  const dataRef = React.useRef(data);
  const savingRef = React.useRef(false);
  dataRef.current = data;

  // Initial load + periodic poll to pull the other person's changes.
  React.useEffect(() => {
    const store = window.VC_store;
    if (!store || !store.configured()) return;
    let alive = true;
    const pull = (initial) => {
      if (initial) setSync('loading');
      store.load()
        .then(rec => { if (alive && !savingRef.current) { setData(rec); setSync('ok'); } })
        .catch(() => { if (alive) setSync('error'); });
    };
    pull(true);
    const secs = (window.VC_CONFIG && window.VC_CONFIG.pollSeconds) || 30;
    const id = setInterval(() => pull(false), secs * 1000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  const persist = () => {
    const store = window.VC_store;
    if (!store || !store.configured()) return;   // local-only mode
    setSync('loading');
    savingRef.current = true;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      store.save(dataRef.current)
        .then(() => setSync('ok'))
        .catch(() => setSync('error'))
        .finally(() => { savingRef.current = false; });
    }, 600);
  };

  const toggle = (y, m, d, person) => {
    const k = mKey(y, m, d);
    setData(prev => ({ ...prev, [k]: { ...prev[k], [person]: !prev[k]?.[person] } }));
    persist();
  };

  const stat = (person) => {
    let checked = 0, total = 0;
    const days = new Date(viewY, viewM + 1, 0).getDate();
    for (let d = 1; d <= days; d++) {
      if (!mWeekday(viewY, viewM, d)) continue;
      if (window.VC_getHoliday(viewY, viewM, d)) continue;
      total++;
      if (data[mKey(viewY, viewM, d)]?.[person]) checked++;
    }
    return { checked, pct: total ? Math.round(checked / total * 100) : 0 };
  };
  const streak = (person) => {
    let s = 0;
    const cur = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    for (let i = 0; i < 365; i++) {
      const w = cur.getDay();
      const hol = window.VC_getHoliday(cur.getFullYear(), cur.getMonth(), cur.getDate());
      if (w >= 1 && w <= 5 && !hol) {
        if (data[mKey(cur.getFullYear(), cur.getMonth(), cur.getDate())]?.[person]) s++;
        else break;
      }
      cur.setDate(cur.getDate() - 1);
    }
    return s;
  };

  const prevMonth = () => { let m = viewM - 1, y = viewY; if (m < 0) { m = 11; y--; } setViewM(m); setViewY(y); };
  const nextMonth = () => { let m = viewM + 1, y = viewY; if (m > 11) { m = 0; y++; } setViewM(m); setViewY(y); };

  const daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
  const dayRows = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const weekend = !mWeekday(viewY, viewM, d);
    if (weekend && !showWeekends) continue;
    const isToday = viewY === today.getFullYear() && viewM === today.getMonth() && d === today.getDate();
    const past = new Date(viewY, viewM, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const holiday = window.VC_getHoliday(viewY, viewM, d);
    const k = mKey(viewY, viewM, d);
    dayRows.push(
      <div key={k}>
        <DayRow
          y={viewY} m={viewM} d={d}
          isToday={isToday} past={past} weekend={weekend} holiday={holiday} todayStyle={todayStyle}
          rows={data[k] || {}}
          onToggle={(person) => toggle(viewY, viewM, d, person)}
        />
      </div>
    );
  }

  const jS = stat('junghwa'), hS = stat('haein');
  const themeVars = window.VC_themeVars(theme);

  return (
    <div style={{
      ...themeVars,
      minHeight: '100%', background: 'var(--bg)', fontFamily: 'var(--font-body)',
      color: 'var(--text)',
      padding: framed
        ? '64px 16px 40px'
        : 'calc(env(safe-area-inset-top, 0px) + 14px) calc(env(safe-area-inset-right, 0px) + 16px) calc(env(safe-area-inset-bottom, 0px) + 28px) calc(env(safe-area-inset-left, 0px) + 16px)',
      boxSizing: 'border-box',
    }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 38, height: 38, background: 'var(--accent)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, flexShrink: 0 }}>💊</div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, letterSpacing: '-.3px', margin: 0 }}>비타민 체크 달력</h1>
            <p style={{ fontSize: 11.5, color: 'var(--text-muted)', margin: '1px 0 0' }}>정화 &amp; 해인의 매일 비타민</p>
          </div>
        </div>
        <SyncBadge status={sync} label={sync === 'idle' ? '로컬 전용' : undefined} />
      </div>

      {/* stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 10 }}>
        <StatGroup person="junghwa" name="정화" stats={[{ value: jS.checked, label: '복용' }, { value: streak('junghwa'), label: '연속' }]} />
        <StatGroup person="haein" name="해인" stats={[{ value: hS.checked, label: '복용' }, { value: streak('haein'), label: '연속' }]} />
      </div>

      {/* progress */}
      <Card padding="sm" style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar person="junghwa" label="정화 복용률" value={jS.pct} />
        <ProgressBar person="haein" label="해인 복용률" value={hS.pct} />
      </Card>

      {/* month switcher */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, padding: '0 2px' }}>
        <button onClick={prevMonth} style={navBtn}>‹</button>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700 }}>{viewY}년 {M_MONTHS[viewM]}</span>
        <button onClick={nextMonth} style={navBtn}>›</button>
      </div>

      {/* day list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{dayRows}</div>
    </div>
  );
}

const navBtn = {
  width: 32, height: 32, borderRadius: 9, border: '1px solid var(--border)',
  background: 'var(--surface)', color: 'var(--text-muted)', fontSize: 17,
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
};

window.MobileApp = MobileApp;
