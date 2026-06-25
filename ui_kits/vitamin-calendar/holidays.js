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
      if (dt.getDay() === weekday) { count++; if (count === n) return d; }
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
    const a = year % 19, b = Math.floor(year / 100), c = year % 100,
      d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25),
      g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
      i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7,
      m = Math.floor((a + 11 * h + 22 * l) / 451),
      month = Math.floor((h + l - 7 * m + 114) / 31),
      day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  }

  const cache = {};
  // → { 'YYYY-MM-DD': 'Holiday Name' }
  function ontarioHolidays(year) {
    if (cache[year]) return cache[year];
    const h = {};
    h[key(year, 0, 1)] = 'New Year\u2019s Day';
    h[key(year, 1, nthWeekday(year, 1, 1, 3))] = 'Family Day';
    const gf = easter(year); gf.setDate(gf.getDate() - 2);
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
