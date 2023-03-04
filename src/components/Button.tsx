import React, {ReactNode} from "react";

type TButtonProps = {
    children: ReactNode;
    onClick: () => void;
}

export function Button({children, onClick}: TButtonProps) {
    return (
        <button
            className="relative items-center px-4 py-2 border border-transparent bg-blue-600 hover:bg-blue-500 rounded focus:outline-none"
            onClick={() => onClick()}
        >
            {children}
        </button>
    )
}