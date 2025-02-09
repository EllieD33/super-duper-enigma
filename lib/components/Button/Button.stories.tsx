import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { FaHeart } from "react-icons/fa";

const meta = {
    title: "Library/Button/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps: ButtonProps = {
    buttonText: "Click me",
    onClick: () => {},
};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};

export const Primary: Story = {
    args: {
        ...defaultProps,
        variant: "primary",
    },
};

export const Secondary: Story = {
    args: {
        ...defaultProps,
        variant: "secondary",
    },
};

export const Tertiary: Story = {
    args: {
        ...defaultProps,
        variant: "tertiary",
    },
};

export const Small: Story = {
    args: {
        ...defaultProps,
        size: "small",
    },
};

export const Large: Story = {
    args: {
        ...defaultProps,
        size: "large",
    },
};

export const Disabled: Story = {
    args: {
        ...defaultProps,
        variant: "primary",
        disabled: true,
    },
};

export const IconDefault: Story = {
    args: {
        onClick: () => {},
        variant: "icon",
        icon: <FaHeart size={24} />,
    },
};
