// VitaminCalendarApp — faithful recreation of the 비타민 체크 달력 app,
// composed from the design-system components. Interactive: toggle
// checks, watch cells tint + stats/streaks update, navigate months.
const { Button, NameTag, Card, ProgressBar, SyncBadge, StatGroup, CalendarCell } =
  window.VitaminCalendarDesignSystem_00e06a;

const MONTHS = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const DAY_LABELS = ['일','월','화','수','목','금','토'];
const PEOPLE = [
  { key: 'haein',   name: '해인', label: '해인 비타민' },
  { key: 'junghwa', name: '정화', label: '정화 비타민' },
];

const dayKey = (y, m, d) => `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
const isWeekday = (y, m, d) => { const w = new Date(y,m,d).getDay(); return w >= 1 && w <= 5; };

// Seed a believable month of history.
function seed() {
  const now = new Date();
  const y = now.getFullYear(), m = now.getMonth();
  const data = {};
  for (let d = 1; d < now.getDate(); d++) {
    if (!isWeekday(y, m, d)) continue;
    const k = dayKey(y, m, d);
    data[k] = { junghwa: Math.random() > 0.18, haein: Math.random() > 0.32 };
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
    setData(prev => ({ ...prev, [k]: { ...prev[k], [person]: !prev[k]?.[person] } }));
    setPopped(k);
    setTimeout(() => setPopped(p => (p === k ? null : p)), 280);
    // simulate the debounced save → sync cycle
    setSync('loading');
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSync('ok'), 700);
  };

  const stats = (person) => {
    let checked = 0, total = 0;
    const days = new Date(viewY, viewM + 1, 0).getDate();
    for (let d = 1; d <= days; d++) {
      if (!isWeekday(viewY, viewM, d)) continue;
      if (window.VC_getHoliday(viewY, viewM, d)) continue;
      total++;
      if (data[dayKey(viewY, viewM, d)]?.[person]) checked++;
    }
    return { checked, total, pct: total > 0 ? Math.round(checked / total * 100) : 0 };
  };

  const streak = (person) => {
    let s = 0;
    const cur = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    for (let i = 0; i < 365; i++) {
      const w = cur.getDay();
      const hol = window.VC_getHoliday(cur.getFullYear(), cur.getMonth(), cur.getDate());
      if (w >= 1 && w <= 5 && !hol) {
        if (data[dayKey(cur.getFullYear(), cur.getMonth(), cur.getDate())]?.[person]) s++;
        else break;
      }
      cur.setDate(cur.getDate() - 1);
    }
    return s;
  };

  const prevMonth = () => { let m = viewM - 1, y = viewY; if (m < 0) { m = 11; y--; } setViewM(m); setViewY(y); };
  const nextMonth = () => { let m = viewM + 1, y = viewY; if (m > 11) { m = 0; y++; } setViewM(m); setViewY(y); };

  const firstDow = new Date(viewY, viewM, 1).getDay();
  const daysInMonth = new Date(viewY, viewM + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(<CalendarCell key={'e' + i} empty />);
  for (let d = 1; d <= daysInMonth; d++) {
    const dow = new Date(viewY, viewM, d).getDay();
    const weekend = dow === 0 || dow === 6;
    const isToday = viewY === today.getFullYear() && viewM === today.getMonth() && d === today.getDate();
    const past = new Date(viewY, viewM, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const holiday = window.VC_getHoliday(viewY, viewM, d);
    const k = dayKey(viewY, viewM, d);
    cells.push(
      <CalendarCell
        key={k}
        date={d}
        weekend={weekend}
        holiday={holiday}
        today={isToday}
        past={past}
        style={popped === k ? { animation: 'vc-pop .22s var(--ease-out)' } : undefined}
        rows={(weekend || holiday) ? [] : PEOPLE.map(p => ({
          person: p.key,
          label: p.label,
          checked: !!data[k]?.[p.key],
          onChange: () => toggle(viewY, viewM, d, p.key),
        }))}
      />
    );
  }

  const jS = stats('junghwa'), hS = stats('haein');

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1rem 4rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, background: 'var(--accent)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>💊</div>
          <div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, letterSpacing: '-.3px', margin: 0, color: 'var(--text)' }}>비타민 체크 달력</h1>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '1px 0 0' }}>해인 &amp; 정화의 매일 비타민</p>
          </div>
        </div>
        <SyncBadge status={sync} />
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 16, marginBottom: '1.25rem' }}>
        {[['h','해인 체크','var(--accent-2-light)','var(--accent-2-mid)'],['j','정화 체크','var(--accent-light)','var(--accent-mid)']].map(([k,t,bg,bd]) => (
          <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: bg, border: `1.5px solid ${bd}` }} />{t}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: '1.25rem' }}>
        <StatGroup person="haein" name="해인" stats={[{ value: hS.checked, label: '복용 완료' }, { value: streak('haein'), label: '연속 복용일' }]} />
        <StatGroup person="junghwa" name="정화" stats={[{ value: jS.checked, label: '복용 완료' }, { value: streak('junghwa'), label: '연속 복용일' }]} />
      </div>

      {/* Progress */}
      <Card padding="sm" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProgressBar person="haein" label="해인 복용률" value={hS.pct} />
        <ProgressBar person="junghwa" label="정화 복용률" value={jS.pct} />
      </Card>

      {/* Calendar */}
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <Button size="icon" onClick={prevMonth}>‹</Button>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{viewY}년 {MONTHS[viewM]}</span>
          <Button size="icon" onClick={nextMonth}>›</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4, marginBottom: 4 }}>
          {DAY_LABELS.map((d, i) => (
            <div key={d} style={{ textAlign: 'center', fontSize: 11, fontWeight: 500, padding: '3px 0 5px', color: (i === 0 || i === 6) ? 'var(--text-faint)' : 'var(--text-muted)' }}>{d}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>{cells}</div>
      </Card>

      <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--text-faint)', marginTop: '1.5rem' }}>✦ Netlify Blobs 저장 · 30초마다 자동 동기화 ✦</p>
    </div>
  );
}

window.VitaminCalendarApp = VitaminCalendarApp;
