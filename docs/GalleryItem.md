# GalleryItem Component

## Description

The `GalleryItem` component renders an image inside a container, with optional overlay text. It supports different sizes and displays a loading skeleton or fallback image in case of errors or while loading.

## Props  

### `GalleryItemProps`  

| Prop              | Type                                       | Required | Description |
|-------------------|--------------------------------------------|----------|-------------|
| `imageUrl`        | `string`                                   | ✅       | The URL of the image to display. |
| `altText`         | `string`                                   | ✅       | The alt text for the image. |
| `imageId`         | `number`                                   | ✅       | Unique identifier for the image. |
| `size`            | `"small" \| "medium" \| "large"`           | ❌       | Optional size of the image. Defaults to `"medium"`. |
| `overlayText`     | `string`                                   | ❌       | Optional text to display over the image as an overlay. |
| `overlayDisplay`  | `"hover" \| "static"`                      | ❌       | Specifies when the overlay text should appear: `"hover"` for hover effect, `"static"` for always visible. |

## Behaviour  

- The `GalleryItem` component renders an image inside a container.  
- If the image is still loading, a skeleton loader will be displayed.  
- If the image fails to load, a fallback image will be shown instead.  
- Optional overlay text can be displayed, either always visible (`"static"`) or shown only on hover (`"hover"`).  
- Supports multiple sizes of images: small, medium, and large.  
- The component uses a lazy loading strategy for images to improve performance.  

[Explore GalleryItem in Storybook](http://localhost:6006/?path=/docs/library-galleries-galleryitem--docs&args=error:&globals=viewport:largeMobile)

## Notes  

- **Fallback Image**: If the `imageUrl` fails to load or has an error, a placeholder image (`https://placehold.co/600`) is shown instead.  
- **Overlay Display**: When `overlayDisplay` is set to `"hover"`, the overlay text appears only when the user hovers over the image. If set to `"static"`, the text remains visible at all times.  
- The **loading skeleton** is shown while the image is still loading, providing a better user experience during image load times.  
- The `GalleryItem` component has a flexible design, adapting to different image sizes depending on the `size` prop.