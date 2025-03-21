# TextArea Component

## Description

The `TextArea` component provides a multi-line input field that allows users to enter text. It supports optional features like character count, error message, and custom styling based on validation or disabled states.

## Props

### `TextAreaProps`

| Prop            | Type                                                      | Required | Description                                                                               |
| --------------- | --------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| `name`          | `string`                                                  | ✅       | The name of the textarea, used for form submission and identification.                    |
| `value`         | `string`                                                  | ✅       | The current value of the textarea.                                                        |
| `onChange`      | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void` | ✅       | Callback function triggered when the textarea value changes.                              |
| `charLimit`     | `number`                                                  | ❌       | Optional character limit for the textarea.                                                |
| `showCharCount` | `boolean`                                                 | ❌       | If true, displays the character count.                                                    |
| `size`          | `{ cols: number, rows: number }`                          | ❌       | Defines the size of the textarea (columns and rows). Defaults to `{ cols: 30, rows: 4 }`. |
| `placeholder`   | `string`                                                  | ❌       | Placeholder text shown in the textarea when it's empty.                                   |
| `required`      | `boolean`                                                 | ❌       | Specifies if the textarea is required.                                                    |
| `error`         | `string`                                                  | ❌       | Optional error message to display if validation fails.                                    |
| `success`       | `boolean`                                                 | ❌       | If true, applies a success style to the textarea.                                         |
| `disabled`      | `boolean`                                                 | ❌       | If true, disables the textarea and prevents user input.                                   |
| `label`         | `string`                                                  | ❌       | Optional label for the textarea.                                                          |

## Behaviour

- The textarea allows users to input text, with optional character limits and character count display when `showCharCount` is true.
- If a `charLimit` is provided, the input is restricted to that number of characters.
- The component supports visual feedback for validation through the `error` and `success` props, applying respective styles accordingly.
- The textarea can be disabled using the `disabled` prop, which prevents user input and interacts with the button styling.
- If an `error` message is provided, it is displayed below the textarea in red.
- The component can optionally display a label for better accessibility and user understanding.

[Explore TextArea in Storybook](http://localhost:6006/?path=/story/library-forms-inputs-textarea--default&args=error:v&globals=viewport:largeMobile)

## Notes

- The component uses **`clsx`** for conditional classNames based on the error, success, and disabled states.
- When `showCharCount` is true, the component displays the current character count and the character limit (if set).
- The `Text` component is used to display error messages in small text with a red colour.
- The textarea is styled with **`Typography.Label`** for the label and **`Typography.Paragraph`** for the input's text.
