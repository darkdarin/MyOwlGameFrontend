import React from 'react';
import { joinClasses } from 'utils';

type TProps = {
  isActive: boolean,
  text: string,
  index: number,
  onSelect: (index: number) => void
}

const baseItemClass = 'block w-full text-left h-11 focus:outline-none pr-6 border-l-4 pr-6';
const itemClass = joinClasses(baseItemClass, 'hover:bg-gray-50 text-gray-600 hover:text-grey-800  border-transparent hover:border-blue-500');
const activeItemClass = joinClasses(baseItemClass, 'bg-gray-50 text-gray-800 border-blue-500');

export function ListItem({ isActive, text, index, onSelect }: TProps): JSX.Element {
  const selectHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSelect(index);
  };

  return (
    <li>
      <button onClick={selectHandler}
              className={isActive ? activeItemClass : itemClass}>
        <span className='ml-2 text-sm tracking-wide truncate'>{text}</span>
      </button>
    </li>
  );
}