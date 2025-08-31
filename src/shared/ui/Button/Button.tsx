import './Button.css';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={[
        'app-button',
        `app-button__${variant}`,
        `app-button__${size}`,
        fullWidth ? 'app-button__full-width' : '',
        disabled ? 'app-button__disabled' : '',
      ].join(' ')}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};