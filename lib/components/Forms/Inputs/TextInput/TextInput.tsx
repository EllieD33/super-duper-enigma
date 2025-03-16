import React, { ReactElement } from "react";
import styles from "./TextInput.module.css";
import { Typography } from "../../../../constants/Typography";
import clsx from "clsx";
import Button from "../../../Button/Button";
import {
    FaLink,
    FaPhoneAlt,
    FaRegEnvelope,
    FaTimesCircle,
} from "react-icons/fa";
import { Colours } from "../../../../constants/Colours";

export interface TextInputProps {
    type?: "text" | "email" | "password" | "tel" | "url";
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
    clearFieldButton?: boolean;
}

const TextInput = ({
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    required = false,
    error,
    success,
    disabled,
    label,
    clearFieldButton,
}: TextInputProps): ReactElement => {
    const iconProps = {
        size: 14,
        color: Colours.Blue,
    };

    const decorativeIconMap = {
        email: <FaRegEnvelope {...iconProps} />,
        tel: <FaPhoneAlt {...iconProps} />,
        url: <FaLink {...iconProps} />,
    };

    const inputStyles = clsx(styles.input, {
        [styles.error]: error,
        [styles.success]: success,
        [styles.disabled]: disabled,
        [styles.inputFloatingLabel]: label?.labelPosition === "floating",
        [styles.inputWithLeftIcon]:
            decorativeIconMap[type as keyof typeof decorativeIconMap],
    });

    const clearButtonStyles = clsx(styles.icon, styles.clearButton, {
        [styles.iconTopPositionTopLabel]: label?.labelPosition === "top",
        [styles.iconTopPosition]: label?.labelPosition !== "top",
    });

    const iconStyles = clsx(styles.icon, styles.leftIcon, {
        [styles.iconTopPositionTopLabel]: label?.labelPosition === "top",
        [styles.iconTopPosition]: label?.labelPosition !== "top",
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
            {Object.keys(decorativeIconMap).includes(type) && (
                <div className={iconStyles} data-testid={"leftIcon"}>
                    {decorativeIconMap[type as keyof typeof decorativeIconMap]}
                </div>
            )}
            <input
                type={type}
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
            {clearFieldButton && (
                <div className={clearButtonStyles}>
                    <Button
                        ariaLabel="Clear field"
                        variant="icon"
                        onClick={() =>
                            onChange({
                                target: { value: "" },
                            } as React.ChangeEvent<HTMLInputElement>)
                        }
                        icon={<FaTimesCircle />}
                    />
                </div>
            )}
        </div>
    );
};

export default TextInput;
