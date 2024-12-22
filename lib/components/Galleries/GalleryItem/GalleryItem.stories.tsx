import type { Meta, StoryObj } from "@storybook/react";
import GalleryItem, { GalleryItemProps } from "./GalleryItem";

const meta = {
    title: "Library/Galleries/GalleryItem",
    component: GalleryItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof GalleryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        imageId: 1,
        imageUrl: "https://cdn.pixabay.com/photo/2023/08/08/15/01/flower-8177578_640.jpg",
        altText: "white flowers wth dark green leaves behind them",
    } as GalleryItemProps,
};
