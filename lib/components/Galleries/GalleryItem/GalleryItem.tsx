import React, { ReactElement, useState } from "react";
import styles from "./GalleryItem.module.css";
import clsx from "clsx";

export interface GalleryItemProps {
    imageUrl: string;
    altText: string;
    imageId: number;
    size?: "small" | "medium" | "large";
    overlayText?: string;
}

const GalleryItem = ({
    imageUrl,
    altText,
    imageId,
    size = "medium",
    overlayText,
}: GalleryItemProps): ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    const galleryItemStyles = clsx(styles.image, styles[size]);
    const skeletonItemStyles = clsx(styles.SkeletonItem, styles[size]);
    const overlayContainerStyles = overlayText
        ? clsx(styles.overlayContainer)
        : "";
    const overlayContentStyles = overlayText ? clsx(styles.overlayContent) : "";

    const fallbackImage = "https://placehold.co/600";

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div id={`gallery-item-${imageId}`} className={styles.container}>
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
                    <div className={overlayContentStyles}>{overlayText}</div>
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
