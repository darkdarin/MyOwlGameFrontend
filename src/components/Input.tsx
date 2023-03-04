import React, {ReactNode} from "react";

type TInputProps = {
    name: string;
    label: ReactNode;
    value: any;
}

export function Input({name, label, value}: TInputProps) {
    return (
        <>
            <label htmlFor="first-name" className="block font-medium text-gray-600">
                {label}
            </label>
            <input type="text"
                   name={name}
                   id={name}
                   value={value}
                   autoComplete="given-name"
                   className="mt-2 block w-full rounded-md border p-2 text-gray-600 placeholder:text-gray-400"/>
        </>
    )
}