import { theme } from 'tailwind.config';
import { SectionHeader } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';

const Colors = () => {
  return (
    <DefaultLayout>
      <DesignLayout>
        <div>
          <SectionHeader title="Colors" />
        </div>
        <div className="grid gap-2 sm:grid-cols-4">
          {Object.entries(theme.colors).map((color) => (
            <div
              key={color[0]}
              className="relative w-full h-16 rounded-md ring-2 ring-accentBg"
              style={{ background: color[1] }}
            >
              <span
                className="absolute bottom-0 right-0 text-xs dark:text-primary text-secondary"
                style={{ mixBlendMode: 'difference' }}
              >
                {color[0]}
              </span>
            </div>
          ))}
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Colors;
