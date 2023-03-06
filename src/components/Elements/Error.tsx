import React, { ReactNode } from 'react';
import { ShieldExclamationIcon } from '@heroicons/react/24/outline';

type TProps = {
  children: ReactNode;
}

export function Error({ children }: TProps): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center text-center w-full'>
      <ShieldExclamationIcon className="text-red-100 p-10 max-w-xs"/>
      <div className="">{children}</div>
    </div>
  );
}