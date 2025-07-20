import type { Meta, StoryObj } from "@storybook/react";
import Particles, { ParticlesProps } from "./Particles";

const meta = {
    title: "Library/Particles/Particles",
    component: Particles,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Particles>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};
