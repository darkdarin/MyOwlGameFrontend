import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Logo } from './Logo';
import { MobileMenuButton } from './MobileMenuButton';
import { NavigationItems } from './NavigationItems';
import { ProfileMenu } from './ProfileMenu';

const menu = [
  { name: 'Кабинет', href: '/' },
  { name: 'Комнаты', href: '/rooms' },
  { name: 'Друзья', href: '/friends' }
];

export function Navigation(): JSX.Element {

  return (
    <Disclosure as='nav' className='bg-gray-50 border-b'>
      {({ open }) => (
        <>
          <MobileMenuButton open={open} />
          <div className='mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between'>

              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Logo />
                <NavigationItems menu={menu} />
              </div>
              <div
                className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <ProfileMenu />
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {menu.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className='bg-gray-900 text-white'
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}