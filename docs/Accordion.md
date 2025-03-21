# Accordion Component

## Description

The `Accordion` component displays a collection of collapsible sections. Each section consists of a heading and body. Users can toggle the visibility of each section's body by clicking on its heading. This component is useful for displaying large amounts of content in a compact form, like FAQs or dropdown-style menus.

## Props

| Name                | Type                 | Default | Description                                                                                                            |
| ------------------- | -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `content`           | `AccordionSection[]` | `[]`    | An array of sections, where each section contains a `heading` and `body`                                               |
| `allowMultipleOpen` | `boolean`            | `true`  | If `false`, only one section can be open at a time, and opening a new section will close the previously opened section |

### `AccordionSection` Type:

Each section has:

- `heading` (`string`): The title of the section that will be shown in the summary.
- `body` (`string`): The content of the section that will be revealed when the user clicks on the heading.

## Usage

```tsx
import Accordion from "./Accordion";

const sections = [
    {
        heading: "Section 1",
        body: "This is the content of section 1.",
    },
    {
        heading: "Section 2",
        body: "This is the content of section 2.",
    },
];

const App = () => {
    return <Accordion content={sections} allowMultipleOpen={false} />;
};
```

### Behavior

- Single Open: If `allowMultipleOpen` is set to `false`, only one section can be open at a time. Clicking a section's heading will close any previously opened section.
- Multiple Open: If `allowMultipleOpen` is set to `true` (the default), multiple sections can be open simultaneously.

[Explore Accordion in Storybook](http://localhost:6006/?path=/story/library-accordion-accordion--default&globals=viewport:largeMobile)

### Testing

The `Accordion` component is tested using React Testing Library. The tests ensure that:

- The component renders correctly.
- The sections toggle open and closed as expected.
- The sections are toggled independently from one another.
- Only one section opens at a time if allowMultipleOpen is false.

### Notes

- The `Accordion` component uses the native `<details>` and `<summary>` HTML elements for accessibility. These elements are natively collapsible, so no JavaScript is required for toggling.
- The component uses inline styles for the heading, pulling from the `Typography.Heading3` and `Colours.DarkBlue` constants for consistency in design.
