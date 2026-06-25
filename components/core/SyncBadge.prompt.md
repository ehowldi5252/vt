**SyncBadge** — the header connection-status pill. Dot color encodes state; the loading dot pulses.

```jsx
<SyncBadge status="ok" />
<SyncBadge status="loading" />
<SyncBadge status="error" label="저장 실패" />
```

`status`: `ok` (green) / `loading` (amber, pulsing) / `error` (pink) / `idle`. Pass `label` to override the default Korean text.
