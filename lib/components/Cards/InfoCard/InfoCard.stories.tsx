import type { Meta, StoryObj } from "@storybook/react";
import InfoCard, { InfoCardProps } from "./InfoCard";

const meta = {
    title: "Library/Cards/InfoCard/InfoCard",
    component: InfoCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
