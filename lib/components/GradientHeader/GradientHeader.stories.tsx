import type { Meta, StoryObj } from "@storybook/react";
import GradientHeader, { GradientHeaderProps } from "./GradientHeader";

const meta = {
    title: "Library/GradientHeader/GradientHeader",
    component: GradientHeader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof GradientHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps: GradientHeaderProps = {
    children: "Experts in Web3 Security & Crisis Response",
    styleAs: "Heading1",
};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
