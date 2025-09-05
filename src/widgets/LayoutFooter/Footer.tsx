import type { FC } from 'react';
import styles from './/Footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>© 2025 Мой Блог. Все права защищены.</p>
    </footer>
  );
}