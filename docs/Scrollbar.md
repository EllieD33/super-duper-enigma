# Scrollbar Component

## Description

The `Scrollbar` component provides a custom scrollbar for horizontally scrollable content. It allows users to interact with the scrollbar, including dragging the thumb and clicking on the track to scroll. The component also adjusts dynamically based on the content's size, showing or hiding the scrollbar as needed.

## Props

### `ScrollbarProps`

| Prop       | Type              | Required | Description                                                                                                       |
| ---------- | ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `children` | `React.ReactNode` | ✅       | The content to be displayed inside the scrollable container. It can include any valid JSX elements or components. |

## Behaviour

- The scrollbar is only visible when the content overflows horizontally.
- The thumb's width and position are dynamically calculated based on the content's width and scroll position.
- Users can drag the scrollbar thumb to scroll the content, or click directly on the track to jump to a specific scroll position.
- The component automatically adjusts when the content or window size changes, ensuring the scrollbar and thumb update accordingly.

[Explore Scrollbar in Storybook](hhttp://localhost:6006/?path=/story/library-scrollbar-scrollbar--default&globals=viewport:largeTablet)

## Notes

- The component makes use of a custom scrollbar design rather than the native browser scrollbar.
- The scrollbar will only be visible if the content overflows horizontally.
- The component uses `requestAnimationFrame` to efficiently handle resizing and scrolling events.
