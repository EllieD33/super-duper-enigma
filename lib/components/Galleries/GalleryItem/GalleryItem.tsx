import { ReactElement } from "react";
import styles from './GalleryItem.module.css';
import clsx from "clsx";


export interface GalleryItemProps {
    imageUrl: string;
    altText: string;
    imageId: number;
    size?: 'small' | 'medium' | 'large'
}

const GalleryItem = ({ imageUrl, altText, imageId, size = 'medium'}: GalleryItemProps): ReactElement => {
    const galleryStyles = clsx(styles.image, styles[size])

    return (
        <div id={`gallery-item-${imageId}`}>
            <img className={galleryStyles} src={imageUrl} alt={altText} loading="lazy" />
        </div>
    );
};

export default GalleryItem;
