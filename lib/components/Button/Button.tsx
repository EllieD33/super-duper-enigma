import React, { ReactElement, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { Spacing } from "../../constants/Spacings";
import { FontSize } from "../../constants/Typography";

export interface ButtonProps {
    buttonText: string;
    variant?: "primary" | "secondary" | "tertiary" | "icon";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
    buttonText,
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    icon,
    onClick,
}: ButtonProps): ReactElement => {
    const sizeStyles = {
        small: {
            paddingLeft: Spacing.Spacing2,
            paddingRight: Spacing.Spacing2,
            fontSize: FontSize.Small,
        },
        medium: {
            paddingLeft: Spacing.Spacing4,
            paddingRight: Spacing.Spacing4,
            fontSize: FontSize.Medium,
        },
        large: {
            paddingLeft: Spacing.Spacing6,
            paddingRight: Spacing.Spacing6,
            fontSize: FontSize.Large,
        },
    };

    const currentSizeStyles =
        sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.medium;

    const buttonClassNames = clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.tertiary]: variant === "tertiary",
        [styles.icon]: variant === "icon",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.disabled]: disabled || loading,
    });

    return (
        <button
            data-testid="button"
            className={buttonClassNames}
            style={currentSizeStyles}
        >
            {buttonText}
        </button>
    );
};

export default Button;
