import type { Meta, StoryObj } from "@storybook/react";
import MasonryGallery, { MasonryGalleryProps } from "./MasonryGallery";
import mockImages from "./testData/testData";

const meta = {
    title: "Library/Galleries/MasonryGallery",
    component: MasonryGallery,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof MasonryGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        images: mockImages,
    } as MasonryGalleryProps,
};
