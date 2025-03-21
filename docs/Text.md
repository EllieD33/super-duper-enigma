# Text Component

## Description

The `Text` component provides flexible text rendering with customisable styles. It allows you to control the tag, typography (weight, size, family), colour, and alignment of the text. This component is suitable for various text elements, such as headings, paragraphs, and other content types.

## Props

### `TextProps`

| Prop        | Type                             | Required | Description                                                              |
| ----------- | -------------------------------- | -------- | ------------------------------------------------------------------------ |
| `children`  | `React.ReactNode`                | ✅       | The content to display inside the text component.                         |
| `as`        | `TextTag`                        | ❌       | Specifies the HTML tag to render (e.g., `h1`, `p`). Defaults to `p`.     |
| `styleAs`   | `keyof typeof TextTag`           | ❌       | Defines the style variant to apply (overrides `as` prop if provided).    |
| `colour`    | `Colours`                        | ❌       | The text colour (from custom `Colours` constant). Defaults to `Gray`.             |
| `weight`    | `FontWeight`                     | ❌       | The font weight (from custom `FontWeight` constant).                                |
| `size`      | `FontSize`                       | ❌       | The font size (from custom `FontSize` constant).                                    |
| `font`      | `FontFamily`                     | ❌       | The font family (from custom `FontFamily` constant).                               |
| `align`     | `"left" \| "centre" \| "right"`  | ❌       | Aligns the text (default is `left`).                                     |
| `className` | `string`                         | ❌       | Additional custom class names to apply to the text element.              |

## Behaviour

- The component dynamically renders the specified `as` tag (e.g., `h1`, `p`, etc.) with the provided typography styles.
- The `styleAs` prop allows you to apply predefined styles based on the text tag (such as `Heading1`, `Paragraph`).
- The `align` prop controls text alignment (e.g., left, center, or right).
- Custom styles, such as `colour`, `weight`, `size`, and `font`, are applied directly to the inline style of the text.
- A warning is displayed in the console if the `children` are not valid for the provided `as` tag.

[Explore Text in Storybook](http://localhost:6006/?path=/story/library-text-text--default&globals=viewport:largeTablet)

## Notes

- The component uses `clsx` to conditionally apply CSS class names, allowing for additional styling flexibility.
- The `Typography` object from constants is used to provide default styles based on the tag or style variant.
- The `isValidTagForChildren` helper function ensures that the children are compatible with the selected tag (e.g., not rendering block elements within inline tags).

