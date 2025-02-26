import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Marquee, { MarqueeProps } from "./Marquee";
import {
    FaAws,
    FaCcAmex,
    FaCcVisa,
    FaEbay,
    FaFedex,
    FaFigma,
    FaPlaystation,
    FaSoundcloud,
    FaStripe,
    FaUps,
} from "react-icons/fa";

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

const textItems = {
    items: [
        "This is my marquee",
        "An endless loop",
        "Never-ending",
        "Not like the movie",
        "This will go on forever",
        "Genuinely",
    ],
};

const iconItems = {
    items: [
        <FaFigma size={32} color="gray" />,
        <FaStripe size={32} color="gray" />,
        <FaCcVisa size={32} color="gray" />,
        <FaUps size={32} color="gray" />,
        <FaEbay size={32} color="gray" />,
        <FaAws size={32} color="gray" />,
        <FaSoundcloud size={32} color="gray" />,
        <FaPlaystation size={32} color="gray" />,
        <FaFedex size={32} color="gray" />,
        <FaCcAmex size={32} color="gray" />,
        <FaFigma size={32} color="gray" />,
        <FaStripe size={32} color="gray" />,
        <FaCcVisa size={32} color="gray" />,
        <FaUps size={32} color="gray" />,
        <FaEbay size={32} color="gray" />,
        <FaAws size={32} color="gray" />,
        <FaSoundcloud size={32} color="gray" />,
        <FaPlaystation size={32} color="gray" />,
        <FaFedex size={32} color="gray" />,
        <FaCcAmex size={32} color="gray" />,
    ],
};

export const Default: Story = {
    args: {
        ...textItems,
    },
};

export const Reverse: Story = {
    args: {
        ...textItems,
        reverse: true,
    },
};

export const Both: Story = {
    args: {
        ...textItems,
    },
    render: (args) => (
        <>
            <Marquee {...args} />
            <div style={{ height: "2rem" }}></div>
            <Marquee {...args} reverse={true} />
        </>
    ),
};

export const Icons: Story = {
    args: {
        ...iconItems,
    },
    render: (args) => (
        <>
            <Marquee {...args} />
            <div style={{ height: "2rem" }}></div>
            <Marquee {...args} reverse={true} />
        </>
    ),
};

export const IconsEdgeFade: Story = {
    args: {
        ...iconItems,
        edgeFade: true,
    },
    render: (args) => (
        <>
            <Marquee {...args} />
            <div style={{ height: "2rem" }}></div>
            <Marquee {...args} reverse={true} />
        </>
    ),
};

export const TextEdgeFade: Story = {
    args: {
        ...textItems,
        edgeFade: true,
    },
    render: (args) => (
        <>
            <Marquee {...args} />
            <div style={{ height: "2rem" }}></div>
            <Marquee {...args} reverse={true} />
        </>
    ),
};
