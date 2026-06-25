// Color themes for the Vitamin Calendar. Each maps onto the design-system
// custom properties; setting them on the app root re-tints every component.
// Two distinct hues — one per person (정화 / 해인) — on warm paper.
//
// Per person:  accent (fills), mid (gradient/tint), light (cell tint),
//              deep (text on white — numerals/labels), on (text on the fill).
window.VC_THEMES = {
  matcha: {
    label: 'Matcha & Peach',
    bg: '#f8f8f4', weekend: '#f2f4ee',
    j:  { accent: '#BACD92', mid: '#cfe0a8', light: '#eef4e2', deep: '#5f7a35', on: '#2c3416' },
    h:  { accent: '#F5DAD2', mid: '#f6c9bd', light: '#fdf3ef', deep: '#c06b50', on: '#5e342a' },
  },
  lavender: {
    label: 'Lavender & Rose',
    bg: '#faf9f6', weekend: '#f8f7fb',
    j:  { accent: '#6c63b6', mid: '#a59dd4', light: '#ede9fb', deep: '#5b51a3', on: '#ffffff' },
    h:  { accent: '#e07a8f', mid: '#ebb8c3', light: '#fdeef1', deep: '#c75e74', on: '#ffffff' },
  },
  sage: {
    label: 'Sage & Amber',
    bg: '#f7f8f6', weekend: '#f3f6f3',
    j:  { accent: '#3a8a6e', mid: '#9bc4b3', light: '#e3f1ec', deep: '#2f7259', on: '#ffffff' },
    h:  { accent: '#e0913a', mid: '#eccb9c', light: '#fbf0e2', deep: '#bf7521', on: '#ffffff' },
  },
  ocean: {
    label: 'Ocean & Teal',
    bg: '#f6f8fa', weekend: '#eef3f7',
    j:  { accent: '#2f6fb0', mid: '#a3c1de', light: '#e6eef6', deep: '#235688', on: '#ffffff' },
    h:  { accent: '#3fa89c', mid: '#a9d6cf', light: '#e4f3f0', deep: '#2f8377', on: '#ffffff' },
  },
  terracotta: {
    label: 'Terracotta & Olive',
    bg: '#faf8f5', weekend: '#f4f1ea',
    j:  { accent: '#c2683f', mid: '#e0b39e', light: '#f8ece4', deep: '#a14f2c', on: '#ffffff' },
    h:  { accent: '#7a8a4a', mid: '#c2c9a3', light: '#eef0e3', deep: '#5f6c39', on: '#ffffff' },
  },
  indigo: {
    label: 'Indigo & Slate',
    bg: '#f9f9fb', weekend: '#f1f1f6',
    j:  { accent: '#4b4f8a', mid: '#aeb0cf', light: '#e8e9f2', deep: '#3a3d6e', on: '#ffffff' },
    h:  { accent: '#5e8a8f', mid: '#b4ced0', light: '#e6f0f1', deep: '#476c70', on: '#ffffff' },
  },
};

// Turn a theme into a style object of CSS custom-property overrides.
window.VC_themeVars = function (key) {
  const t = window.VC_THEMES[key] || window.VC_THEMES.matcha;
  return {
    '--bg': t.bg,
    '--weekend-bg': t.weekend,
    '--accent': t.j.accent, '--accent-mid': t.j.mid, '--accent-light': t.j.light,
    '--accent-deep': t.j.deep, '--on-accent': t.j.on,
    '--accent-2': t.h.accent, '--accent-2-mid': t.h.mid, '--accent-2-light': t.h.light,
    '--accent-2-deep': t.h.deep, '--on-accent-2': t.h.on,
    '--status-error': t.h.deep, '--status-missed': t.h.mid,
  };
};
