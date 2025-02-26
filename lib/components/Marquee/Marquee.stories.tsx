import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Marquee, { MarqueeProps } from "./Marquee";

const meta = {
    title: "Library/Marquee/Marquee",
    component: Marquee,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps = {
    items: [
        "This is my marquee",
        "An endless loop",
        "Never-ending",
        "Not like the movie",
        "This will go on forever",
        "Genuinely",
    ],
};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};

export const Reverse: Story = {
    args: {
        ...defaultProps,
        reverse: true,
    },
};

export const Both: Story = {
    args: {
        ...defaultProps,
    },
    render: (args) => (
        <>
            <Marquee {...args} />
            <div style={{ height: "2rem" }}></div>
            <Marquee {...args} reverse={true} />
        </>
    ),
};
