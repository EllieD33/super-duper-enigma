import type { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./Text";
import { TextTag } from "../../constants/TextTags";
import { Colours } from "../../constants/Colours";
import { FontFamily } from "../../constants/Typography";

const meta = {
    title: "Library/Text/Text",
    component: Text,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "This is what default text looks like",
    } as TextProps,
};

export const Heading: Story = {
    args: {
        children: "This is what a default heading looks like",
        as: TextTag.Heading1,
    } as TextProps,
};
