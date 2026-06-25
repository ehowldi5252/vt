**CalendarCell** — one day in the month grid. Composes `VitaminCheck` rows and tints itself by completion.

```jsx
<CalendarCell
  date={14} today
  rows={[
    { person: 'junghwa', label: '정화 비타민', checked: true },
    { person: 'haein',   label: '해인 비타민', checked: false },
  ]}
/>
<CalendarCell date={1} holiday="Canada Day" />
```

Both checked → split purple/pink gradient; one checked → that hue; `weekend` dims and hides rows; `holiday="<name>"` renders a peach "pause" day with a 🍁 label and no rows; `past` shows missed dots; `empty` renders a blank padding cell.
