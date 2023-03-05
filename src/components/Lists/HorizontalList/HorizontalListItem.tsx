import React from 'react';

type TProps = {
  isActive: boolean,
  text: string,
  index: number,
  onSelect: (index: number) => void
}

const baseItemClass = 'block items-center h-12 focus:outline-none pr-6 border-b-4 px-6 py-2 ';
const itemClass = baseItemClass + 'hover:bg-gray-50 text-gray-600 hover:text-grey-800 border-transparent hover:border-blue-500';
const activeItemClass = baseItemClass + 'bg-gray-50 text-gray-800 border-blue-500';

export function HorizontalListItem({ isActive, text, index, onSelect }: TProps): JSX.Element {
  const selectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSelect(index);
  };

  return (
    <li>
      <button onClick={selectHandler} className={isActive ? activeItemClass : itemClass}>
        <span className='text-xl'>{text}</span>
      </button>
    </li>
  );
}