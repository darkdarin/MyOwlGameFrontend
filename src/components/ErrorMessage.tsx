import React from "react";

interface ErrorMessageProps {
    message: string
}

export function ErrorMessage({message}: ErrorMessageProps) {
    return (
        <p className="text-center text-red-500">{message}</p>
    )
}