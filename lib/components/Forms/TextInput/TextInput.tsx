import React, { ReactElement, Dispatch, SetStateAction } from "react";
import styles from "./TextInput.module.css";
import { Typography } from "../../../constants/Typography";
import clsx from "clsx";

export interface TextInputProps {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
    success?: boolean;
    disabled?: boolean;
}

const TextInput = ({
    name,
    value,
    onChange,
    placeholder,
    required = false,
    error,
    success,
    disabled,
}: TextInputProps): ReactElement => {
    const inputStyles = clsx(styles.input, {
        [styles.error]: error,
        [styles.success]: success,
        [styles.disabled]: disabled,
    });
    return (
        <>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className={inputStyles}
                style={{ ...Typography.Paragraph }}
                data-testid={`${name}-input`}
            />
        </>
    );
};

export default TextInput;
