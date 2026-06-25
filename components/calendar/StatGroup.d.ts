import * as React from 'react';

/**
 * A person's monthly stat block: NameTag header + big Gmarket-Sans numerals.
 *
 * @startingPoint section="Calendar" subtitle="Per-person monthly stat block" viewport="360x140"
 */
export interface StatGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whose hue to use. @default "junghwa" */
  person?: 'junghwa' | 'haein';
  /** Header name shown in the NameTag, e.g. "정화". */
  name?: string;
  /** Caption after the tag. @default "이번 달" */
  caption?: string;
  /** Numerals to show. */
  stats?: { value: React.ReactNode; label: string }[];
}

export function StatGroup(props: StatGroupProps): JSX.Element;
