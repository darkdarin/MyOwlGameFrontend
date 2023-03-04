import React from "react";
import {NavLink} from "react-router-dom";

type TNavigationItems = {
    menu: Array<{
        name: string
        href: string
    }>
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function NavigationItems({menu}: TNavigationItems) {
    return (
        <>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex flex-col sm:flex-row">
                    {menu.map((item) => (
                        <NavLink key={item.name} to={item.href}>
                            {({isActive}) => (
                                <span
                                    className={classNames(
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
    )
}