import clsx from 'clsx';
import { Circle } from 'icons';
import { useState } from 'react';
import IconButton from './IconButton';

const ThemeColorToggle = () => {
  const colors = ['#81e6d9', '#9ae6b4'];
  const [color, setColor] = useState('#81e6d9');
  const currentIndex = colors.indexOf(color);
  const next = (currentIndex + 1) % colors.length;

  const toggle = () => {
    if (process.browser) {
      const newColor = colors[next];
      document.documentElement.style.setProperty('--brand', newColor);
      setColor(newColor);
    }
  };
  return (
    <div className="flex items-center ">
      <IconButton
        className="fill-current text-brand"
        icon={Circle}
        onClick={() => toggle()}
        colored
        rounded
      />
    </div>
  );
};

export default ThemeColorToggle;
