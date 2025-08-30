import { useState, type FC } from 'react';
import './Header.css';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';

export const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header">
      <h1>Мой Блог</h1>
      <div className="header__controls">
        <ThemeSwitcher />
        <Button
          variant="secondary"
          size="small"
          onClick={() => setIsModalOpen(true)}
        >
          О проекте
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>О проекте</h2>
        <p>Это учебное приложение, созданное с использованием:</p>
        <ul className="modal-list">
          {['Vite', 'React', 'TypeScript', 'Context API', 'React.Portal'].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
      </Modal>
    </header>
  );
};
