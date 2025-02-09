import type { Meta, StoryObj } from "@storybook/react";
import Chip, { ChipProps } from "./Chip";
import { PastelColors } from "../../../constants/Colours";

const meta = {
    title: "Library/ChipSet/Chip/Chip",
    component: Chip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
    chipText: "Category",
};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
