import type { Meta, StoryObj } from "@storybook/react";
import ChipSet, { ChipSetProps } from "./ChipSet";

const meta = {
    title: "Library/ChipSet/ChipSet",
    component: ChipSet,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ChipSet>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
    chipText: [
        "Category",
        "Tag",
        "Longer label",
        "String",
        "Hi",
        "",
        "Test text",
        "More text",
        "Label",
        "Hello",
    ],
};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
