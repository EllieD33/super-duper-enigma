import type { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./Text";
import { TextTag } from "../../constants/TextTags";
import { Colours } from "../../constants/Colours";
import { FontFamily } from "../../constants/Typography";

const meta = {
    title: "Library/Text/Text",
    component: Text,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const textTags = [
    TextTag.Paragraph,
    TextTag.Span,
    TextTag.Heading1,
    TextTag.Heading2,
    TextTag.Heading3,
    TextTag.Heading4,
    TextTag.Heading5,
    TextTag.Heading6,
    TextTag.Strong,
    TextTag.Emphasis,
    TextTag.Label,
    TextTag.Small,
    TextTag.Div,
];

export const Default: Story = {
    args: {
        children: "This is what default text looks like",
    } as TextProps,
};

const dynamicStories: Record<string, Story> = {};

textTags.forEach((tag) => {
    dynamicStories[tag] = {
        args: {
            children: `This is what a default ${tag} looks like`,
            as: tag,
        } as TextProps,
    };
});

export const Paragraph = dynamicStories[TextTag.Paragraph];
export const Span = dynamicStories[TextTag.Span];
export const Heading1 = dynamicStories[TextTag.Heading1];
export const Heading2 = dynamicStories[TextTag.Heading2];
export const Heading3 = dynamicStories[TextTag.Heading3];
export const Heading4 = dynamicStories[TextTag.Heading4];
export const Heading5 = dynamicStories[TextTag.Heading5];
export const Heading6 = dynamicStories[TextTag.Heading6];
export const Strong = dynamicStories[TextTag.Strong];
export const Emphasis = dynamicStories[TextTag.Emphasis];
export const Label = dynamicStories[TextTag.Label];
export const Small = dynamicStories[TextTag.Small];
export const Div = dynamicStories[TextTag.Div];
