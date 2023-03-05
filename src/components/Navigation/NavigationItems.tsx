import React from 'react';
import { NavLink } from 'react-router-dom';
import { joinClasses } from 'utils';

type TProps = {
  menu: Array<{
    name: string
    href: string
  }>
}

export function NavigationItems({ menu }: TProps): JSX.Element {
  return (
    <>
      <div className='hidden sm:ml-6 sm:block'>
        <div className='flex flex-col sm:flex-row'>
          {menu.map((item) => (
            <NavLink key={item.name} to={item.href}>
              {({ isActive }) => (
                <span
                  className={joinClasses(
                    isActive ? 'ext-blue-500 border-b-2 font-medium border-blue-500' : '',
                    'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'
                  )}
                >
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}