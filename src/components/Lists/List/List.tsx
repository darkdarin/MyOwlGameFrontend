import React, { ReactNode } from 'react';

type TProps = {
  title: string;
  button?: ReactNode;
  children: ReactNode;
}

export function List({ title, children, button }: TProps): JSX.Element {
  return (
    <div className='flex-col w-64 bg-white h-full border-r'>
      <div className='overflow-y-auto overflow-x-hidden flex-grow'>
        <ul className='flex flex-col space-y-1'>
          <li className='px-5'>
            <div className='flex flex-row items-center h-12 relative'>
              <div className='flex-col text-sm tracking-wide text-gray-500 font-bold'>
                {title}
              </div>
              {button && (
                <div className='absolute flex right-0'>{button}</div>
              )}
            </div>
          </li>
          {children}
        </ul>
      </div>
    </div>
  );
}