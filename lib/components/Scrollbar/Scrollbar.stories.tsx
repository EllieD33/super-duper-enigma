import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Scrollbar from "./Scrollbar";
import { mockContent as children } from "./testData/testData";

const meta = {
    title: "Library/Scrollbar/Scrollbar",
    component: Scrollbar,
    parameters: {},
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Scrollbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children,
    },
    render: (args) => <Scrollbar>{args.children}</Scrollbar>,
};
