import React, { ReactElement } from "react";
import styles from "./TextArea.module.css";
import clsx from "clsx";
import Text from "../../../Text/Text";
import { Typography } from "../../../../constants/Typography";
import { TextTag } from "../../../../constants/TextTags";
import { Colours } from "../../../../constants/Colours";

export interface TextAreaProps {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    charLimit?: number;
    showCharCount?: boolean;
    size?: { cols: number; rows: number };
    placeholder?: string;
    required?: boolean;
    error?: string;
    success?: boolean;
    disabled?: boolean;
    label?: string;
}

const TextArea = ({
    name,
    value,
    onChange,
    charLimit,
    showCharCount,
    size = { cols: 30, rows: 4 },
    placeholder,
    required,
    error,
    success,
    disabled,
    label,
}: TextAreaProps): ReactElement => {
    const textAreaStyles = clsx(styles.textarea, {
        [styles.error]: error,
        [styles.success]: success,
        [styles.disabled]: disabled,
    });

    return (
        <div className={styles.textareaContainer} data-testid={"textarea"}>
            {label && (
                <label
                    htmlFor={name}
                    style={{ ...Typography.Label }}
                    data-testid={`label-${label}`}
                    className={styles.label}
                >
                    {label}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                cols={size.cols}
                rows={size.rows}
                maxLength={charLimit}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={textAreaStyles}
            />
            {showCharCount && (
                <div
                    className={styles.charCount}
                    style={{ ...Typography.Label }}
                    data-testid={"charCount"}
                >
                    <output>{value.length}</output>/{charLimit}
                </div>
            )}
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

export default TextArea;
