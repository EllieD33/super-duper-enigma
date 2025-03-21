import type { Meta, StoryObj } from "@storybook/react";
import Accordion, { AccordionProps } from "./Accordion";

const meta = {
    title: "Library/Accordion/Accordion",
    component: Accordion,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta tellus non ultricies egestas. In consectetur velit eu lorem dignissim imperdiet. Nulla tincidunt vestibulum tortor, eget interdum lacus molestie in. Duis eget tellus non arcu pulvinar feugiat at ut sapien. Etiam lectus erat, venenatis et faucibus ut, convallis id mauris. Proin non dolor interdum, scelerisque turpis at, rutrum nisi.";

const defaultProps: AccordionProps = {
    content: [
        { heading: "Heading One", body: lorem },
        { heading: "Heading Two", body: lorem },
        { heading: "Heading Three", body: lorem },
    ],
};

export const Default: Story = {
    args: {
        ...defaultProps,
    },
};

export const SinlgeOpening: Story = {
    args: {
        ...defaultProps,
        allowMultipleOpen: false,
    },
};
