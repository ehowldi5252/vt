import * as React from 'react';

/** Header status pill: colored dot (loading pulses) + short label on a hairline capsule. */
export interface SyncBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sync state. @default "ok" */
  status?: 'ok' | 'loading' | 'error' | 'idle';
  /** Override the default Korean label for the status. */
  label?: string;
}

export function SyncBadge(props: SyncBadgeProps): JSX.Element;
