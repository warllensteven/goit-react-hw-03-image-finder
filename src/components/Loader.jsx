import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const CustomLoader = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default CustomLoader;
