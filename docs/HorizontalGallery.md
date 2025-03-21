# HorizontalGallery Component

## Description

The `HorizontalGallery` component renders a horizontally scrollable gallery of images. It uses the `GalleryItem` component to display each image, with optional overlay text and a hover or static display mode. It is perfect for showcasing a collection of images in a scrollable container.

## Props

### `HorizontalGalleryProps`

| Prop    | Type                     | Required | Description                                                              |
|---------|--------------------------|---------|--------------------------------------------------------------------------|
| `images` | `GalleryItemProps[]` | ✅       | An array of images to be displayed in the gallery. Each image must adhere to the `GalleryItemProps` interface. |

### `GalleryItemProps`

See [GalleryItem Documentation](/docs/GalleryItem.md)

## Behaviour

- The `HorizontalGallery` component displays a horizontally scrollable gallery of images.
- Each image is rendered using the `GalleryItem` component.
- Optionally, an overlay text can be displayed on top of the image. The display mode of the overlay can be controlled with the `overlayDisplay` prop (`"hover"` or `"static"`).
- The gallery is wrapped in the `Scrollbar` component to make it scrollable.

[Explore HorizontalGallery in Storybook](http://localhost:6006/?path=/story/library-galleries-horizontalgallery--default&globals=viewport:largeMobile)

## Notes

- The `GalleryItem` component is used to display each individual image.
- The `Scrollbar` component provides the horizontal scrolling behavior.

