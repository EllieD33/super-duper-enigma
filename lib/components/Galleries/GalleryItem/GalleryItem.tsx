import React, { ReactElement, useState } from "react";
import styles from "./GalleryItem.module.css";
import clsx from "clsx";

export interface GalleryItemProps {
    imageUrl: string;
    altText: string;
    imageId: number;
    size?: "small" | "medium" | "large";
}

const GalleryItem = ({
    imageUrl,
    altText,
    imageId,
    size = "medium",
}: GalleryItemProps): ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    const galleryItemStyles = clsx(styles.image, styles[size]);
    const skeletonItemStyles = clsx(styles.SkeletonItem, styles[size]);
    const fallbackImage = "https://placehold.co/600";

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div id={`gallery-item-${imageId}`}>
            <img
                className={galleryItemStyles}
                src={hasError ? fallbackImage : imageUrl}
                alt={hasError ? "image not found" : altText}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
                data-testid="galleryItemImage"
            />
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
