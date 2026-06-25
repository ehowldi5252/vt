import * as React from 'react';

/** Per-person dosage-rate bar: recessed track, gradient fill in the person's hue. */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill percentage 0–100. */
  value?: number;
  /** Whose hue to use. @default "junghwa" */
  person?: 'junghwa' | 'haein';
  /** Optional caption above the track. */
  label?: string;
  /** Show the % numeral. @default true */
  showPct?: boolean;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;
