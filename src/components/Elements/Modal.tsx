import React from 'react';

type TProps = {
  children: React.ReactNode;
  title: string;
  onClose?: () => void;
}

export function Modal({ children, title, onClose }: TProps): JSX.Element {
  return (
    <>
      <div
        className='fixed bg-black/20 top-0 left-0 right-0 bottom-0'
        onClick={() => onClose && onClose()}
      />
      <div className='w-[500px] rounded bg-white absolute top-10 left-1/2 -translate-x-1/2 overflow-hidden'>
        <h1 className='p-2 px-3 text-xl text-left mb-3 border-b text-gray-600'>{title}</h1>
        {children}
      </div>
    </>
  );
}