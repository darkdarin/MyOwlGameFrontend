import React from 'react';

export function Loader(): JSX.Element {
  return (
    <div className='flex items-center justify-center w-full overflow-hidden py-16'>
      <div className='w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin border-t-transparent'></div>
    </div>
  );
}