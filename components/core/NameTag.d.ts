import * as React from 'react';

/** Soft pill that labels a person (정화 purple / 해인 pink) or a neutral badge. */
export interface NameTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Person whose hue to use. */
  person?: 'junghwa' | 'haein';
  /** Force a tone regardless of person. */
  tone?: 'purple' | 'pink' | 'neutral';
  children?: React.ReactNode;
}

export function NameTag(props: NameTagProps): JSX.Element;
