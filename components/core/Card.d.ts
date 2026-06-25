import * as React from 'react';

/**
 * The base white surface for every block in the app.
 *
 * @startingPoint section="Core" subtitle="Hairline-bordered surface container" viewport="700x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner padding. @default "md" */
  padding?: 'sm' | 'md' | 'lg';
  /** Add the soft tinted drop shadow. @default false */
  elevated?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
