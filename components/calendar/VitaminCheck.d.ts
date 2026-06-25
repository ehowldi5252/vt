import * as React from 'react';

/** One tappable vitamin row: hue checkbox + label that strikes through when done. */
export interface VitaminCheckProps {
  /** Row label, e.g. "정화 비타민". */
  label?: string;
  /** Whose hue to use. @default "junghwa" */
  person?: 'junghwa' | 'haein';
  /** Checked (done) state. */
  checked?: boolean;
  /** Show the soft pink "missed" dot (past, unchecked day). */
  missed?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
}

export function VitaminCheck(props: VitaminCheckProps): JSX.Element;
