import React from 'react';
import styles from './Container.module.css';

const Container = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.heading}>
      {title}
    </h2>
    {children}
  </section>
)

export default Container;