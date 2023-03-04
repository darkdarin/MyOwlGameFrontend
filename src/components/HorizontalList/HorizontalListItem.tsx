import React from 'react';

type TItemProps = {
    isActive: boolean,
    text: string,
    index: number,
    onSelect: (index: number) => void
}

const baseItemClass = 'relative flex flex-row items-center h-11 focus:outline-none pr-6 border-l-4 pr-6 ';
const itemClass = baseItemClass + 'hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-transparent hover:border-blue-500';
const activeItemClass = baseItemClass + 'bg-gray-50 text-gray-800 border-blue-500';

export function HorizontalListItem({isActive, text, index, onSelect}: TItemProps) {
    const selectHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onSelect(index);
    }

    return (
        <li>
            <a href="#" onClick={selectHandler}
               className={isActive ? activeItemClass : itemClass}
            >
                <span className="ml-2 text-sm tracking-wide truncate">{text}</span>
            </a>
        </li>
    )
}