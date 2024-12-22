import { ReactElement } from "react";
import styles from './GalleryItem.module.css'

export interface GalleryItemProps {
    imageUrl: string;
    altText: string;
    imageId: number;
}

const GalleryItem = ({ imageUrl, altText, imageId }: GalleryItemProps): ReactElement => {
    return (
        <div id={`gallery-item-${imageId}`}>
            <img className={styles.image} src={imageUrl} alt={altText} loading="lazy" />
        </div>
    );
};

export default GalleryItem;
