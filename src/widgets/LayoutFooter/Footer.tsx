import type { FC } from 'react';
import './Footer.scss';

export const Footer: FC = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>© 2025 Мой Блог. Все права защищены.</p>
    </footer>
  );
}