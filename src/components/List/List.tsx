import React, {ReactNode} from 'react';

type TListProps = {
    title: string,
    children: ReactNode
}

export function List<Type extends TElementWithId>({title, children}: TListProps) {
    return (
        <div className="flex-col w-64 bg-white h-full border-r">
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                    <li className="px-5">
                        <div className="flex flex-row items-center h-8">
                            <div className="text-sm font-light tracking-wide text-gray-500">{title}</div>
                        </div>
                    </li>
                    {children}
                </ul>
            </div>
        </div>
    )
}