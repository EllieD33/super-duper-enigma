import { convertNumberToWords } from "../../../utils/convertNumberToWords";
import mockImages from "../../Galleries/MasonryGallery/testData/testData";
import { ProductCardProps } from "../ProductCard/ProductCard";

const tagOptions = [
    ["Electronics", "Gadget", "New"],
    ["Fashion", "Trending", "Sale"],
    ["Home", "Decor", "Popular"],
    ["Sports", "Outdoor", "Gear"],
    ["Books", "Education", "Read"],
    ["Food", "Gourmet", "Fresh"],
];

export const mockProducts: ProductCardProps[] = Array.from(
    { length: mockImages.length },
    (_, index) => ({
        productInfo: {
            id: index + 1,
            productImage: mockImages[index],
            productName: `Product ${convertNumberToWords(index + 1)}`,
            productDescription:
                "This is an example product description. It's just a couple of lines of text.",
            productPrice: index + 1 * 8,
            productTags: tagOptions[index % tagOptions.length],
        },
        buttonText: "Add to basket",
        buttonOnClick: () => {},
    })
);
