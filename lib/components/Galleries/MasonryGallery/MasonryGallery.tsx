import React, { ReactElement } from "react";
import GalleryItem, { GalleryItemProps } from "../GalleryItem/GalleryItem";
import styles from "./MasonryGallery.module.css";

export interface MasonryGalleryProps {
    images: GalleryItemProps[];
}

const MasonryGallery = ({ images }: MasonryGalleryProps): ReactElement => {
    if (!images || images.length === 0) {
        return <></>;
    }

    return (
        <div
            className={styles.container}
            data-testid="masonry-gallery-container"
        >
            {images &&
                images.map((image) => (
                    <div key={image.imageId}>
                        <GalleryItem {...image} />
                    </div>
                ))}
        </div>
    );
};

export default MasonryGallery;
