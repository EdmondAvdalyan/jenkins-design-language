import * as React from 'react';

export interface InputProps {
    onChange: (value: string) => void;
}

export function Input({ onChange }: InputProps) {
    return (
        <input
            className="input input-error"
            type="text"
            onChange={e => onChange(e.target.value)}
        />
    );
}
