import React from 'react';

type TItemProps = {
    isActive: boolean,
    text: string,
    index: number,
    onSelect: (index: number) => void
}

const baseItemClass = 'block w-full text-left h-11 focus:outline-none pr-6 border-l-4 pr-6 ';
const itemClass = baseItemClass + 'hover:bg-gray-50 text-gray-600 hover:text-grey-800  border-transparent hover:border-blue-500';
const activeItemClass = baseItemClass + 'bg-gray-50 text-gray-800 border-blue-500';

export function ListItem({isActive, text, index, onSelect}: TItemProps) {
    const selectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSelect(index);
    }

    return (
        <li>
            <button onClick={selectHandler} className={isActive ? activeItemClass : itemClass}>
                <span className="ml-2 text-sm tracking-wide truncate">{text}</span>
            </button>
        </li>
    )
}