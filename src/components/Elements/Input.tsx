import React, { ReactNode, useState } from 'react';

type TProps = {
  name: string;
  label: ReactNode;
  value: any;
  onChange?: (name: string, value: any) => void;
}

export function Input({ name, label, value, onChange }: TProps): JSX.Element {
  const [localValue, setLocalValue] = useState(value);

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    setLocalValue(() => e.target.value);
    onChange && onChange(name, localValue);
  }

  return (
    <>
      <label htmlFor='first-name' className='block font-medium text-gray-600'>
        {label}
      </label>
      <input type='text'
             name={name}
             id={name}
             value={localValue}
             autoComplete='given-name'
             onChange={changeInputHandler}
             className='mt-2 block w-full rounded-md border p-2 text-gray-600 placeholder:text-gray-400 focus:outline-blue-600' />
    </>
  );
}