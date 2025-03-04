import React, { ReactElement, useState } from "react";
import styles from "./GalleryItem.module.css";
import clsx from "clsx";
import Text from "../../Text/Text";
import { TextTag } from "../../../constants/TextTags";
import { Colours } from "../../../constants/Colours";

export interface GalleryItemProps {
    imageUrl: string;
    altText: string;
    imageId: number;
    size?: "small" | "medium" | "large";
    overlayText?: string;
    overlayDisplay?: "hover" | "static";
}

const GalleryItem = ({
    imageUrl,
    altText,
    imageId,
    size,
    overlayText,
    overlayDisplay,
}: GalleryItemProps): ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    const galleryItemStyles = clsx(styles.image, size && styles[size]);
    const skeletonItemStyles = clsx(styles.SkeletonItem, size && styles[size]);
    const overlayContainerStyles = overlayText && styles.overlayContainer;
    const overlayContentStyles = clsx(styles.overlayContent, {
        [styles.overlayHover]: overlayDisplay === "hover",
        [styles.overlayStatic]: overlayDisplay === "static",
    });
    const staticWrapperStyles =
        overlayDisplay === "static" && styles.staticWrapper;
    const fallbackImage = "https://placehold.co/600";

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div
            data-testid={`gallery-item-${imageId}`}
            className={styles.container}
        >
            <div className={overlayContainerStyles}>
                <img
                    className={galleryItemStyles}
                    src={hasError ? fallbackImage : imageUrl}
                    alt={hasError ? "image not found" : altText}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    data-testid="galleryItemImage"
                />
                {overlayText && (
                    <div className={overlayContentStyles}>
                        <div
                            className={clsx(staticWrapperStyles)}
                            data-testid="staticWrapper"
                        >
                            <Text
                                as={TextTag.Span}
                                colour={Colours.White}
                                styleAs={"Heading1"}
                            >
                                {overlayText}
                            </Text>
                        </div>
                    </div>
                )}
            </div>
            {isLoading && !hasError && (
                <div
                    className={skeletonItemStyles}
                    data-testid="skeleton"
                ></div>
            )}
        </div>
    );
};

export default GalleryItem;
