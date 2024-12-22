import { ReactElement } from "react";
import GalleryItem, { GalleryItemProps } from "../GalleryItem/GalleryItem";
import clsx from "clsx";
import styles from "./HorizontalGallery.module.css"

export interface HorizontalGalleryProps {
    images: GalleryItemProps[];
    size?: 'small' | 'medium' | 'large'
}

const HorizontalGallery = ({
    images,
    size = 'medium'
}: HorizontalGalleryProps): ReactElement => {
    const galleryStyles = clsx(styles.container, styles[size])
    return (
            <div className={galleryStyles}>
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
