import React, { ReactNode } from 'react';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';

type TProps = {
  children: ReactNode;
}

export function Error({ children }: TProps): JSX.Element {
  return (
    <div className='text-center'>
      <ShieldExclamationIcon className="text-red-100 p-10"/>
      {children}
    </div>
  );
}