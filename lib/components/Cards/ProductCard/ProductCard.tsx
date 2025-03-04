import React, { ReactElement, useState, MouseEventHandler } from "react";
import styles from "./ProductCard.module.css";
import GalleryItem, {
    GalleryItemProps,
} from "../../Galleries/GalleryItem/GalleryItem";
import Text from "../../Text/Text";
import { TextTag } from "../../../constants/TextTags";
import { Spacing } from "../../../constants/Spacings";
import Button from "../../Button/Button";
import { FaHeart } from "react-icons/fa";
import { Colours } from "../../../constants/Colours";
import ChipSet from "../../ChipSet/ChipSet";

type ProductInfo = {
    id: number | string;
    productImage: GalleryItemProps;
    productName: string;
    productDescription: string;
    productPrice: number;
    productTags?: string[];
};

export interface ProductCardProps {
    productInfo: ProductInfo;
    buttonText: string;
    buttonOnClick: MouseEventHandler<HTMLButtonElement>;
}

const ProductCard = ({
    productInfo,
    buttonText,
    buttonOnClick,
}: ProductCardProps): ReactElement => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const { id, productName, productDescription, productPrice, productTags } =
        productInfo;
    const iconStyles = {
        marginRight: Spacing.Spacing5,
        marginTop: Spacing.Spacing4,
    };

    const handleLikeClick = () => {
        setIsLiked((prevState) => !prevState);
    };

    return (
        <div className={styles.card} data-testid={`productCard-${id}`}>
            <div className={styles.imageArea}>
                <GalleryItem {...productInfo.productImage} />
                <div className={styles.likeButton} style={iconStyles}>
                    <Button
                        variant="icon"
                        ariaLabel="Like button"
                        ariaPressed={isLiked}
                        icon={
                            <FaHeart
                                color={isLiked ? Colours.Pink : Colours.White}
                                size={28}
                            />
                        }
                        onClick={handleLikeClick}
                    />
                </div>
            </div>
            <div
                className={styles.cardTextContentArea}
                style={{
                    margin: Spacing.Spacing4,
                    gap: Spacing.Spacing3,
                }}
            >
                <Text as={TextTag.Heading3}>{productName}</Text>
                <Text>{productDescription}</Text>
                {productTags && <ChipSet chipText={productTags} />}
                <div className={styles.flexRowContainer}>
                    <Text styleAs={"Heading1"}>£{productPrice}</Text>
                    <Button buttonText={buttonText} onClick={buttonOnClick} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
