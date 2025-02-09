import { convertNumberToWords } from "../../../utils/convertNumberToWords";
import mockImages from "../../Galleries/MasonryGallery/testData/testData";
import { ProductCardProps } from "../ProductCard/ProductCard";

export const mockProducts: ProductCardProps[] = Array.from(
    { length: mockImages.length },
    (_, index) => ({
        productInfo: {
            productImage: mockImages[index],
            productName: `Product ${convertNumberToWords(index + 1)}`,
            productDescription:
                "This is an example product description. It's just a couple of lines of text.",
            productPrice: index + 1 * 8,
            productTags: ["Tag", "Info", "Category"],
        },
        buttonText: "Add to basket",
    })
);
