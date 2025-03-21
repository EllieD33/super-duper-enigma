# Chip and ChipSet Components

## Description

The `Chip` and `ChipSet` components provide a way to display small, categorised labels. `Chip` represents an individual tag, while `ChipSet` is a collection of `Chip` components, each with an automatically assigned pastel colour.

## Props

### `ChipProps`

| Prop       | Type           | Required | Description                                          |
| ---------- | -------------- | -------- | ---------------------------------------------------- |
| `chipText` | `string`       | ✅       | The text displayed inside the chip.                  |
| `colour`   | `PastelColors` | ❌       | Optional background colour; defaults to pastel blue. |

### `ChipSetProps`

| Prop       | Type       | Required | Description                                          |
| ---------- | ---------- | -------- | ---------------------------------------------------- |
| `chipText` | `string[]` | ✅       | An array of strings, each representing a chip label. |

## Behaviour

- Each chip in `ChipSet` receives a **rotating pastel colour** from the `PastelColors` set, cycling through the colours in order.
- `ChipSet` ensures even spacing between chips using a flexbox layout with a gap defined by `Spacing.Spacing2`.
- `Chip` provides a minimal, styled text label, with a default blue background unless a custom colour is specified.
- If `chipText` is an empty string in `Chip`, the component does not render to avoid blank spaces.

[Explore ChipSet in Storybook](http://localhost:6006/?path=/story/library-chipset-chipset--default&globals=viewport:largeMobile)

## Notes

- The `Chip` component is a lightweight label used for categorisation.
- `ChipSet` automatically assigns different colours to each chip, preventing repetition in small sets.
