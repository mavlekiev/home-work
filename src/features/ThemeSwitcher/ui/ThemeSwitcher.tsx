import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button variant="secondary" size="small" onClick={toggleTheme}>
      {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
    </Button>
  );
};