import { useDarkMode } from 'hooks/darkMode';
import { Moon, Sun } from 'icons';
import IconButton from './IconButton';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useDarkMode();

  return (
    <IconButton
      onClick={() => toggleTheme()}
      icon={theme === 'dark' ? Sun : Moon}
      rounded
    />
  );
};

export default ThemeToggle;
