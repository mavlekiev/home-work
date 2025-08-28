import type { FC } from 'react';
import './Header.scss';

export const Header: FC = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>Мой блог</h1>
    </header>
  );
}
