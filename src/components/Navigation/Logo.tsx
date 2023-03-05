import React from 'react';

export function Logo(): JSX.Element {
  return (
    <div className='flex flex-shrink-0 items-center'>
      <img
        className='block h-8 w-auto lg:hidden'
        src='/logo.png'
        alt='My Owl Game'
      />
      <img
        className='hidden h-8 w-auto lg:block'
        src='/logo.png'
        alt='My Owl Game'
      />
    </div>
  );
}