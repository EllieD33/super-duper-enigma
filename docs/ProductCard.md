# ProductCard Component

## Description

The `ProductCard` component displays product details, including an image, name, description, price, tags, and interactive buttons for liking and purchasing.

## Props

### `ProductCardProps`

| Prop            | Type                                             | Required | Description                                                                                     |
| --------------- | ------------------------------------------------ | -------- | ----------------------------------------------------------------------------------------------- |
| `productInfo`   | `ProductInfo` object                             | ✅       | Contains details about the product, such as image, name, description, price, and optional tags. |
| `buttonText`    | `string`                                         | ✅       | The text displayed on the action button (e.g., "Buy Now").                                      |
| `buttonOnClick` | `(event: MouseEvent<HTMLButtonElement>) => void` | ✅       | Callback function triggered when the action button is clicked.                                  |

### `ProductInfo`

| Prop                 | Type                 | Required | Description                                                                         |
| -------------------- | -------------------- | -------- | ----------------------------------------------------------------------------------- |
| `id`                 | `number` or `string` | ✅       | Unique identifier for the product.                                                  |
| `productImage`       | `GalleryItemProps`   | ✅       | Image data for the product, passed to the `GalleryItem` component.                  |
| `productName`        | `string`             | ✅       | Name of the product.                                                                |
| `productDescription` | `string`             | ✅       | Brief description of the product.                                                   |
| `productPrice`       | `number`             | ✅       | Price of the product in GBP (£).                                                    |
| `productTags`        | `string[]`           | ❌       | Optional list of tags describing the product (e.g., "Eco-friendly", "Best Seller"). |

## Behaviour

- The `ProductCard` component displays product information, including an image, name, description, price, and tags (if provided).
- A heart-shaped like button allows users to "favourite" the product, toggling its state and changing its color accordingly.
- The action button (e.g., "Buy Now") triggers a callback when clicked, allowing custom functionality.
- The layout adapts to include optional product tags using a `ChipSet` component.  
  [Explore ProductCard in Storybook](http://localhost:6006/?path=/story/library-cards-productcard--default&globals=viewport:largeMobile)

## Notes

- The `ProductCard` component **integrates with the `GalleryItem` component** to display product images.
- Users can **"like"** a product by clicking the heart icon. The button updates visually based on `isLiked` state.
- The `ChipSet` component is used to display optional product tags.
- Uses a **flexbox layout** for aligning the price and purchase button.
