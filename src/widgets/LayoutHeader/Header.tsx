import type { FC } from 'react';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Мой блог</h1>
    </header>
  );
}
