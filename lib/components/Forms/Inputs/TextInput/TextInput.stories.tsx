import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input, { TextInputProps } from "./TextInput";
import { action } from "@storybook/addon-actions";
import TextInput from "./TextInput";

const meta = {
    title: "Library/Forms/Inputs/TextInput",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps: TextInputProps = {
    name: "my-input",
    value: "",
    placeholder: "Type here...",
    onChange: action("onChange"),
};

export const Default: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const WithLabel: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                value={text}
                label={{ labelText: "Input label", labelPosition: "top" }}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const WithFloatingLabel: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                value={text}
                label={{ labelText: "Input label", labelPosition: "floating" }}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const WithClearFieldButton: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                clearFieldButton
                value={text}
                label={{ labelText: "Input label", labelPosition: "floating" }}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const Email: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                type="email"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const Tel: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                type="tel"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const Password: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                type="password"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const URL: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextInput
                {...args}
                type="url"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};
