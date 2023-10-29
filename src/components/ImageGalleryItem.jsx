import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  return (
    <li className={styles.galleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.image}
        onClick={() => onImageClick(image.largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
