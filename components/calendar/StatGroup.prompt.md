**StatGroup** — a per-person monthly summary card: a name pill above big rounded numerals.

```jsx
<StatGroup
  person="junghwa"
  name="정화"
  stats={[
    { value: 18, label: '복용 완료' },
    { value: 6,  label: '연속 복용일' },
  ]}
/>
```

`person` tints the numerals and the NameTag; `stats` is an array of `{ value, label }`.
