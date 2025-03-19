import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import NumberInput, { NumberInputProps } from "./NumberInput";

const meta = {
    title: "Library/Forms/Inputs/NumberInput",
    component: NumberInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
    name: "my-input",
    value: "0",
    onChange: action("onChange"),
};

export const Default: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [value, setValue] = useState(args.value || "0");

        return (
            <NumberInput
                {...args}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};

export const WithLabel: Story = {
    args: { ...defaultProps },
    render: (args) => {
        const [value, setValue] = useState(args.value || "0");

        return (
            <NumberInput
                {...args}
                value={value}
                label="Quantity"
                onChange={(e) => {
                    setValue(e.target.value);
                    action("onChange")(e.target.value);
                }}
            />
        );
    },
};
