import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DefaultLayout, DesignLayout } from 'components/layouts';
import { theme as twTheme } from 'tailwind.config';

const Colors = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const computedColors = Object.entries(twTheme.colors).map((c) => {
      const bg = getComputedStyle(document.documentElement).getPropertyValue(
        `--${c[0]}`
      );
      return {
        name: c[0],
        var: c[1],
        color: bg,
        foreground:
          parseInt(bg.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff',
      };
    });
    setColors(computedColors);
    setMounted(true);
  }, []);

  return (
    <DefaultLayout>
      <DesignLayout title="colors" subtitle="colorsSub">
        <div className="grid rounded-lg shadow-sm ring-2 ring-accent">
          {mounted &&
            colors.map(({ name, color, foreground }) => (
              <div
                key={name}
                className="flex items-center justify-between w-full h-24 p-6 sm:p-6 "
                style={{ background: color, color: foreground }}
              >
                <span className="font-semibold capitalize sm:text-xl">
                  {name}
                </span>
                <span className="font-mono text-sm">{`var(--${name})`}</span>
                <span className="text-sm">{color}</span>
              </div>
            ))}
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Colors;
