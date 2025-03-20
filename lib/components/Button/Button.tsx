import React, { ReactElement, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { Spacing } from "../../constants/Spacings";
import { FontSize } from "../../constants/Typography";

export interface CommonButtonProps {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
    ariaPressed?: boolean;
    ariaLabel?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TextButtonProps extends CommonButtonProps {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    buttonText: string;
    icon?: ReactNode;
}

export interface IconButtonProps extends CommonButtonProps {
    variant: "icon";
    icon: ReactNode;
    buttonText?: never;
}

export type ButtonProps = TextButtonProps | IconButtonProps;

const Button = (props: ButtonProps): ReactElement => {
    const {
        type = "button",
        icon,
        buttonText,
        variant = "primary",
        disabled,
        loading,
        ariaPressed,
        ariaLabel,
        onClick,
    } = props;

    const size = "size" in props ? (props.size ?? "medium") : undefined;

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
        (size && sizeStyles[size as keyof typeof sizeStyles]) ||
        sizeStyles.medium;

    const buttonClassNames = clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.tertiary]: variant === "tertiary",
        [styles.icon]: variant === "icon",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.disabled]: disabled || loading,
        [styles.iconWithText]: buttonText && icon,
    });

    if (variant === "icon") {
        const icon = "icon" in props && props.icon;
        const iconStyles = clsx(styles.iconButton, styles.button);
        return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled || loading}
                aria-label={ariaLabel}
                aria-pressed={ariaPressed}
                className={iconStyles}
                data-testid="icon-button"
            >
                {icon}
            </button>
        );
    }

    return (
        <button
            type={type}
            data-testid={`button-${buttonText}`}
            className={buttonClassNames}
            style={currentSizeStyles}
            onClick={onClick}
            disabled={disabled || loading}
            aria-label={ariaLabel}
            aria-pressed={ariaPressed}
        >
            {icon && icon}
            {buttonText}
        </button>
    );
};

export default Button;
