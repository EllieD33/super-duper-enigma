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
    label?: {
        labelText?: string;
        labelPosition?: "floating" | "top";
    };
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
    label,
}: TextInputProps): ReactElement => {
    const inputStyles = clsx(styles.input, {
        [styles.error]: error,
        [styles.success]: success,
        [styles.disabled]: disabled,
        [styles.inputFloatingLabel]: label?.labelPosition === "floating",
    });
    return (
        <div className={styles.inputContainer}>
            {label && (
                <label
                    htmlFor={name}
                    style={{ ...Typography.Label }}
                    className={styles[`${label.labelPosition}Label`]}
                    data-testid={`${name}-inputLabel`}
                >
                    {label.labelText}
                </label>
            )}
            <input
                type="text"
                id={name}
                name={name}
                placeholder={!label ? placeholder : undefined}
                aria-label={!label ? name : undefined}
                required={required}
                value={value}
                onChange={onChange}
                className={inputStyles}
                style={{ ...Typography.Paragraph }}
                data-testid={`${name}-input`}
            />
        </div>
    );
};

export default TextInput;
