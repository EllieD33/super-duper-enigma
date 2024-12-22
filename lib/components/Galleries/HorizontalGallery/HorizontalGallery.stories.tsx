import type { Meta, StoryObj } from "@storybook/react";
import HorizontalGallery, {
    HorizontalGalleryProps,
} from "././HorizontalGallery";

const meta = {
    title: "Library/Galleries/HorizontalGallery",
    component: HorizontalGallery,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof HorizontalGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const imageArray = [
    {
        imageId: 1,
        imageUrl: "https://cdn.pixabay.com/photo/2023/08/08/15/01/flower-8177578_640.jpg",
        altText: "image alt text",
    },
    {
        imageId: 2,
        imageUrl: "https://cdn.pixabay.com/photo/2023/04/21/11/51/flower-7941764_640.jpg",
        altText: "image alt text",
    },
    {
        imageId: 3,
        imageUrl: "https://cdn.pixabay.com/photo/2023/06/04/12/00/rose-8039502_640.jpg",
        altText: "image alt text",
    },
    {
        imageId: 4,
        imageUrl: "https://cdn.pixabay.com/photo/2023/04/08/18/01/flower-7909902_640.jpg",
        altText: "image alt text",
    },
    {
        imageId: 5,
        imageUrl: "https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529_640.jpg",
        altText: "image alt text",
    },
    {
        imageId: 6,
        imageUrl: "https://cdn.pixabay.com/photo/2016/07/11/21/23/water-lily-1510707_640.jpg",
        altText: "image alt text",
    },
    {
        imageId: 7,
        imageUrl: "https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_640.jpg",
        altText: "image alt text",
    },
    {
        imageId: 8,
        imageUrl: "https://cdn.pixabay.com/photo/2023/07/28/20/36/flower-8155951_640.jpg",
        altText: "image alt text",
    }
];


export const Default: Story = {
    args: {
        images: imageArray,
    } as HorizontalGalleryProps,
};
