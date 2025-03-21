# TextInput Component  

## Description  

The `TextInput` component provides a text input field with various types, including text, email, password, telephone, and URL. It features optional validation feedback, a password toggle for password fields, a clear field button, and support for floating or top-positioned labels.  

## Props  

### `TextInputProps`  

| Prop                  | Type                                     | Required | Description |
|-----------------------|------------------------------------------|----------|-------------|
| `type`                | `'text' \| 'email' \| 'password' \| 'tel' \| 'url'` | ❌       | Specifies the type of input field. Defaults to `"text"`. |
| `name`                | `string`                                 | ✅       | The name of the input, used for form submission and identification. |
| `value`               | `string`                                 | ✅       | The current value of the input field. |
| `onChange`            | `(event: React.ChangeEvent<HTMLInputElement>) => void` | ✅ | Callback triggered when the input value changes. |
| `placeholder`         | `string`                                 | ❌       | Placeholder text displayed when the input is empty. |
| `required`            | `boolean`                                | ❌       | If true, makes the input field required. |
| `error`               | `string`                                 | ❌       | Optional error message to display if validation fails. |
| `success`             | `boolean`                                | ❌       | If true, applies a success style to the input. |
| `disabled`            | `boolean`                                | ❌       | If true, disables the input field. |
| `label`               | `{ labelText?: string; labelPosition?: "floating" \| "top"; }` | ❌ | Optional label configuration with text and position (either `"floating"` or `"top"`). |
| `clearFieldButton`    | `boolean`                                | ❌       | If true, a button to clear the input field will be displayed. |

## Behaviour  

- The component provides different input types such as text, email, password, telephone, and URL.  
- When `type="password"`, the input field includes a toggle button to show or hide the password.  
- If `clearFieldButton` is enabled, a button will appear that allows users to clear the input field.  
- The component applies visual feedback for validation based on the `error` and `success` props, highlighting the field accordingly.  
- If a `label` prop is provided, it can be positioned as either a floating label or above the field.  
- If an error message is provided, it will be displayed below the input field in red.  

[Explore TextInput in Storybook](http://localhost:6006/?path=/story/library-forms-inputs-textinput--default&globals=viewport:largeMobile)

## Notes  

- The component uses **`clsx`** for conditional classNames based on the `error`, `success`, `disabled`, and `labelPosition` props.  
- The password field allows toggling visibility through the `passwordToggleIcon`.  
- The icon variant of the **`Button`** component is used for the password toggle and clear field buttons, ensuring consistent styling.  