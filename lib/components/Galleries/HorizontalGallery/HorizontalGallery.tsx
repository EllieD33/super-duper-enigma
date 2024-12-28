import React, { ReactElement } from "react";
import GalleryItem, { GalleryItemProps } from "../GalleryItem/GalleryItem";
import styles from "./HorizontalGallery.module.css";

export interface HorizontalGalleryProps {
    images: GalleryItemProps[];
}

const HorizontalGallery = ({
    images,
}: HorizontalGalleryProps): ReactElement => {
    return (
        <div className={styles.container}>
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
