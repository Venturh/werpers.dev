import useTranslation from 'next-translate/useTranslation';
import Button from './Button';

type Props = {
  title: string;
  subtitle?: string;
  button?: { text: string; to?: string; onClick?: () => void };
  children: React.ReactChild;
};

const Container = ({ title, subtitle, button, children }: Props) => {
  const { t } = useTranslation('portfolio');
  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-3xl font-bold sm:text-4xl ">{t(title)}</h2>
        {button ? (
          <Button onClick={button.onClick} to={button.to}>
            {button.text}
          </Button>
        ) : null}
      </div>
      {subtitle && <h3 className="lg:text-lg text-secondary">{t(subtitle)}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Container;
