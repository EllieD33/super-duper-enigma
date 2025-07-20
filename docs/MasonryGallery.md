# MasonryGallery Component

## Description

The `MasonryGallery` component displays images in a grid with a repeating pattern of large and small square images. The layout is designed to form a neat, structured grid, alternating between large and small squares, ensuring a visually balanced and consistent presentation of images.

## Props

### `MasonryGalleryProps`

| Prop     | Type                 | Required | Description                                                                                                     |
| -------- | -------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `images` | `GalleryItemProps[]` | ✅       | An array of images to be displayed in the gallery. Each image must conform to the `GalleryItemProps` interface. |

### `GalleryItemProps`

See [GalleryItem Documentation](/docs/GalleryItem.md)

## Behaviour

- The `MasonryGallery` component arranges images in a neat grid, with alternating large and small square images.
- Each image is rendered using the `GalleryItem` component, ensuring consistent display of images.
- The grid pattern is formed by repeating large and small square images, creating a dynamic and visually appealing layout.
- Optionally, overlay text can be displayed on top of the image. The display mode of the overlay can be controlled with the `overlayDisplay` prop (`"hover"` or `"static"`).
- The gallery adapts dynamically to the available space, with the images arranged into the grid pattern.

[Explore MasonryGallery in Storybook](http://localhost:6006/?path=/story/library-galleries-masonrygallery--default&globals=viewport:largeTablet)

## Notes

- The `images` prop expects an array of objects adhering to the `GalleryItemProps` interface.
- The layout alternates between large and small square images, forming a structured and neat grid.
