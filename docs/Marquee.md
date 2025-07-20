# Marquee Component

## Description

The `Marquee` component displays a continuous scrolling list of items (text or icons) in a horizontal direction. The items can scroll either from left to right or right to left, with optional edge fading effects to create a seamless scrolling experience. The component can be used for showcasing various pieces of information, such as promotions, notifications, or featured content.

## Props

### `MarqueeProps`

| Prop       | Type      | Required | Description                                                                                                      |
| ---------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `items`    | `any[]`   | ✅       | An array of items to be displayed in the marquee. Items can be either text or icons.                             |
| `reverse`  | `boolean` | ❌       | If `true`, the items will scroll from right to left. If `false` or not provided, they scroll from left to right. |
| `edgeFade` | `boolean` | ❌       | If `true`, an edge fading effect will be applied to the start and end of the marquee.                            |

## Behaviour

- The `Marquee` component creates a horizontally scrolling list of items.
- The items in the marquee can be text or icons, allowing for flexible content presentation.
- The `reverse` prop allows you to control the direction of the scroll (from left to right or right to left).
- The `edgeFade` prop applies a fading effect at both edges of the marquee, providing a smooth and visually appealing transition.
- The component duplicates the items list to create a continuous scrolling effect that wraps around smoothly.

[Explore Marquee in Storybook](http://localhost:6006/?path=/story/library-marquee-marquee--default&globals=viewport:largeTablet)

## Notes

- The `items` prop can include any type of content, but it's commonly used for strings (text) or icons (such as from `react-icons`).
- The component relies on CSS classes to manage the scrolling behaviour and fading effects.
- The scrolling direction is controlled using the `reverse` prop, and the fading effect is applied using the `edgeFade` prop.
- The layout uses the `track` element to manage the scrolling content, ensuring smooth animation and looping.
