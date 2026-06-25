import * as React from 'react';

/**
 * The app's button: small square calendar-nav control plus soft action variants.
 *
 * @startingPoint section="Core" subtitle="Buttons, nav controls & action variants" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. @default "default" */
  variant?: 'default' | 'primary' | 'pink' | 'ghost';
  /** Sizing. "icon" is the 30×30 square nav control. @default "md" */
  size?: 'sm' | 'md' | 'icon';
  /** Bind the accent hue to a person. */
  person?: 'junghwa' | 'haein';
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
