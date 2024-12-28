import React, { ReactElement } from "react";
import GalleryItem, { GalleryItemProps } from "../GalleryItem/GalleryItem";
import styles from "./HorizontalGallery.module.css";

export interface HorizontalGalleryProps {
    images: GalleryItemProps[];
}

const HorizontalGallery = ({
    images,
}: HorizontalGalleryProps): ReactElement => {
    if (!images || images.length === 0) {
        return <></>;
    }

    return (
        <div className={styles.container} data-testid="gallery-container">
            {images &&
                images.map((image) => (
                    <div key={image.imageId}>
                        <GalleryItem {...image} />
                    </div>
                ))}
        </div>
    );
};

export default HorizontalGallery;
