# FilterableList Component

## Description

The `FilterableList` component renders a list of items that can be filtered based on a specified property. It provides a button group for selecting filters and dynamically updates the displayed items.

## Props

### `FilterableListProps`

| Prop              | Type                          | Required | Description                                       |
| ----------------- | ----------------------------- | -------- | ------------------------------------------------- |
| `listItems`       | `filterableComponents[]`      | ✅       | The list of items to display and filter.          |
| `renderItem`      | `(item: any) => ReactElement` | ✅       | Function that renders each list item.             |
| `filterSelectors` | `string[]`                    | ✅       | Array of possible filter values for selection.    |
| `filterProperty`  | `string`                      | ✅       | The property within each item used for filtering. |

## Behaviour

- Displays a **filter button group** allowing users to refine the visible list based on a selected filter.
- Clicking a filter button updates the `selectedFilter` state, filtering items based on the `filterProperty`.
- Supports filtering on **nested properties** using the `getNestedProperty` utility.
- The "All" button clears the filter, showing all items.
- Items are animated using **Framer Motion**, with a smooth fade-in, fade-out effect on filter changes.
- If no items match the selected filter, a "No results found" message is displayed.

[Explore FilterableList in Storybook](http://localhost:6006/?path=/story/library-filterablelist-filterablelist--default&globals=viewport:largeMobile)

## Notes

- Uses **Framer Motion** for animated filtering, ensuring a smooth user experience.
- Supports filtering lists of components like `ProductCard`, but is **flexible** for other item types.
- The filter button labels are converted to **PascalCase** for readability.
