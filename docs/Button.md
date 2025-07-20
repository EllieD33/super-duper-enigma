# Button Component

## Description

The `Button` component provides a flexible and accessible button element that supports multiple variants, sizes, and optional icons. It supports both text-based and icon-only buttons.

## Props

### Common Props (Applicable to All Variants)

| Prop          | Type                                               | Default     | Description                                             |
| ------------- | -------------------------------------------------- | ----------- | ------------------------------------------------------- |
| `type`        | `"button" \| "submit" \| "reset"`                  | `"button"`  | Defines the button type.                                |
| `disabled`    | `boolean`                                          | `false`     | Disables the button when `true`.                        |
| `loading`     | `boolean`                                          | `false`     | Displays a loading state (disables the button).         |
| `ariaPressed` | `boolean`                                          | `undefined` | Indicates if the button is pressed (for accessibility). |
| `ariaLabel`   | `string`                                           | `undefined` | Provides an accessible label for screen readers.        |
| `onClick`     | `(e: React.MouseEvent<HTMLButtonElement>) => void` | `undefined` | Function triggered on button click.                     |

### Text Button Props

| Prop         | Type                                     | Default        | Description                                       |
| ------------ | ---------------------------------------- | -------------- | ------------------------------------------------- |
| `variant`    | `"primary" \| "secondary" \| "tertiary"` | `"primary"`    | Defines the button style.                         |
| `size`       | `"small" \| "medium" \| "large"`         | `"medium"`     | Controls the button's size (padding & font size). |
| `buttonText` | `string`                                 | **(required)** | The text displayed on the button.                 |
| `icon`       | `ReactNode`                              | `undefined`    | Optional icon displayed next to text.             |

### Icon Button Props

| Prop         | Type        | Default        | Description                                 |
| ------------ | ----------- | -------------- | ------------------------------------------- |
| `variant`    | `"icon"`    | **(required)** | Specifies that this is an icon-only button. |
| `icon`       | `ReactNode` | **(required)** | The icon displayed in the button.           |
| `buttonText` | `never`     | `undefined`    | Not allowed for icon buttons.               |

## Behaviour

- Variant Styling: The variant prop determines the button's appearance.
- Size Adjustments: The size prop modifies padding and font size for different contexts.
- Disabled & Loading States: The button is disabled when disabled or loading is true.

[Explore Button in Storybook](http://localhost:6006/?path=/story/library-button-button--default&globals=viewport:largeMobile)

## Testing

The `Button` component is tested using React Testing Library. The tests ensure that:

- Rendering: Buttons render with correct styles and attributes.
- Click Handling: onClick events are triggered correctly.
- Accessibility: aria-label and aria-pressed work as expected.

## Notes

- The Button component supports both text buttons and icon buttons, ensuring flexibility in UI design.
- It uses clsx for dynamically applying styles based on variant, size, and state (disabled, loading).
- Button sizes (small, medium, large) adjust padding and font size based on predefined spacing and typography constants.
- The component prevents interaction when disabled or loading is true, ensuring proper UI behaviour.
