import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextArea, { TextAreaProps } from "./TextArea";

const meta = {
    title: "Library/Forms/Inputs/TextArea",
    component: TextArea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps: TextAreaProps = {
    name: "my-textarea",
    value: "",
    placeholder: "Type here...",
    onChange: action("onChange"),
};

export const Default: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextArea
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
            <TextArea
                {...args}
                label={"Textarea Label"}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const WithCharCount: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [text, setText] = useState(args.value || "");

        return (
            <TextArea
                {...args}
                label={"Textarea Label"}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    action("onChange")(e.target.value);
                }}
                charLimit={150}
                showCharCount={true}
            />
        );
    },
};
