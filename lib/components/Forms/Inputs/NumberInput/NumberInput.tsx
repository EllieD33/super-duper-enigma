import React, { ReactElement } from "react";
import styles from "./NumberInput.module.css";
import clsx from "clsx";
import { Typography } from "../../../../constants/Typography";
import Button from "../../../Button/Button";
import { FaMinus, FaPlus } from "react-icons/fa";
import Text from "../../../Text/Text";
import { TextTag } from "../../../../constants/TextTags";
import { Colours } from "../../../../constants/Colours";

export interface NumberInputProps {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    success?: boolean;
}

const NumberInput = ({
    name,
    value,
    onChange,
    label,
    required,
    disabled,
    error,
    success,
}: NumberInputProps): ReactElement => {
    const inputStyles = clsx(styles.numberInput, {
        [styles.error]: error,
        [styles.success]: success,
        [styles.disabled]: disabled,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            [
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
                "ArrowUp",
                "ArrowDown",
            ].includes(e.key)
        )
            return;
        if (!/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleIncrementDecrement = (action: "increment" | "decrement") => {
        const newValue =
            action === "increment" ? Number(value) + 1 : Number(value) - 1;
        onChange({
            target: { name, value: newValue.toString() },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    return (
        <div className={styles.inputContainer}>
            {label && <label style={{ ...Typography.Label }}>{label}</label>}
            <div className={styles.inputFieldContainer}>
                <input
                    type="number"
                    id={name}
                    name={name}
                    aria-label={!label ? name : undefined}
                    required={required}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    inputMode="numeric"
                    className={inputStyles}
                    style={{ ...Typography.Paragraph }}
                    data-testid={`${name}-input`}
                />
                <div className={styles.buttonPairContainer}>
                    <Button
                        onClick={() => handleIncrementDecrement("increment")}
                        variant="icon"
                        icon={<FaPlus />}
                        disabled={disabled}
                        ariaLabel={`Increment ${name}`}
                    />
                    <Button
                        onClick={() => handleIncrementDecrement("decrement")}
                        variant="icon"
                        icon={<FaMinus />}
                        disabled={disabled}
                        ariaLabel={`Decrement ${name}`}
                    />
                </div>
            </div>
            {error && (
                <Text
                    as={TextTag.Small}
                    colour={Colours.Red}
                    className={styles.errorMessage}
                >
                    {error}
                </Text>
            )}
        </div>
    );
};

export default NumberInput;
