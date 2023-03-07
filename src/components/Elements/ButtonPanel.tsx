import React, { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
}

export function ButtonPanel({ children }: TProps): JSX.Element {
  return (
    <div className="group button-panel">
      {children}
    </div>
  );
}