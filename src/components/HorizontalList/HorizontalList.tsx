import React, {ReactNode} from 'react';

type TListProps = {
    title: string;
    button?: ReactNode;
    children: ReactNode;
}

export function HorizontalList({title, button, children}: TListProps) {
    return (
        <div className="w-full bg-white h-12 border-b">
            <div className="overflow-x-auto flex-grow">
                <ul className="flex flex-row space-x-1">
                    <li>
                        <div className="flex flex-row items-center h-12">
                            <div className="text-sm tracking-wide text-gray-500 font-bold px-4">{title}</div>
                        </div>
                    </li>
                    {children}
                    {button && (
                        <li>
                            <div className="flex flex-row items-center h-12 pl-2">{button}</div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}