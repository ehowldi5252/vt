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
        headers: { [c.keyHeader || 'X-Access-Key']: c.key },
      });
      if (!r.ok) throw new Error('jsonbin load failed: ' + r.status);
      const j = await r.json();
      const rec = j && j.record;
      return (rec && typeof rec === 'object' && !Array.isArray(rec)) ? rec : {};
    },

    // PUT the full object back to the bin
    async save(data) {
      const c = cfg();
      const r = await fetch(`${base}/${c.binId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          [c.keyHeader || 'X-Access-Key']: c.key,
        },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error('jsonbin save failed: ' + r.status);
      return true;
    },
  };

  window.VC_store = VC_store;
})();
