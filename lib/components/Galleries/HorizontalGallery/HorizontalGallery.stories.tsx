import type { Meta, StoryObj } from "@storybook/react";
import HorizontalGallery, {
    HorizontalGalleryProps,
} from "././HorizontalGallery";
import mockImages from "./testData/testData";

const meta = {
    title: "Library/Galleries/HorizontalGallery",
    component: HorizontalGallery,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof HorizontalGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        images: mockImages,
    } as HorizontalGalleryProps,
};
