import * as React from 'react';

interface CellRow {
  person: 'junghwa' | 'haein';
  label?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * One day cell in the month grid: tints by who checked in, rings today, dims weekends.
 *
 * @startingPoint section="Calendar" subtitle="A single day cell with vitamin rows" viewport="160x110"
 */
export interface CalendarCellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Day-of-month number. */
  date?: React.ReactNode;
  /** Weekend styling (muted, no vitamin rows). */
  weekend?: boolean;
  /** Holiday name — renders the day as a muted "pause" with a 🍁 label, no rows. */
  holiday?: string | null;
  /** Ring the cell as today. */
  today?: boolean;
  /** Past day — shows "missed" dots on unchecked rows. */
  past?: boolean;
  /** Vitamin rows for the day. */
  rows?: CellRow[];
  /** Render an empty padding cell. */
  empty?: boolean;
}

export function CalendarCell(props: CalendarCellProps): JSX.Element;
