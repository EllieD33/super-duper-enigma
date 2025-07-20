import type { Meta, StoryObj } from "@storybook/react";
import Hero, { HeroProps } from "./Hero";

const meta = {
    title: "Library/Hero/Hero",
    component: Hero,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
