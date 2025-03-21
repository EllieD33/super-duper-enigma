# NumberInput Component

## Description

The `NumberInput` component allows users to input numeric values, with optional increment and decrement buttons. It is ideal for use cases such as adjusting quantities, age, or other numeric entries.

## Props

### `NumberInputProps`

| Prop       | Type                                                   | Required | Description                                                               |
| ---------- | ------------------------------------------------------ | -------- | ------------------------------------------------------------------------- |
| `name`     | `string`                                               | ✅       | The name of the input field, used for form submission and identification. |
| `value`    | `string`                                               | ✅       | The current value of the input field.                                     |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | ✅       | Callback function triggered when the input value changes.                 |
| `label`    | `string`                                               | ❌       | Optional label for the input field.                                       |
| `required` | `boolean`                                              | ❌       | Specifies if the field is required.                                       |
| `disabled` | `boolean`                                              | ❌       | If true, the input field and buttons are disabled.                        |
| `error`    | `string`                                               | ❌       | Optional error message to display if validation fails.                    |
| `success`  | `boolean`                                              | ❌       | If true, the input is shown with a success style.                         |

## Behaviour

- The input accepts only numeric values, blocking non-numeric characters during typing.
- Users can increase or decrease the value by clicking the respective **increment** or **decrement** buttons.
- If the input value is modified manually, the component calls the `onChange` callback to update the state.
- **Increment** and **decrement** buttons are disabled when the input is disabled.
- The component supports validation through the `error` and `success` props, applying respective styles when appropriate.

[Explore NumberInput in Storybook](http://localhost:6006/?path=/story/library-forms-inputs-numberinput--default&globals=viewport:largeMobile)

## Notes

- Uses **`clsx`** for conditional classNames based on the error, success, and disabled states.
- The increment and decrement buttons are implemented using **`Button` components** with **icon variants**.
- The component ensures accessibility by setting appropriate `aria-labels` and using the `inputMode="numeric"` attribute for mobile number keyboards.
