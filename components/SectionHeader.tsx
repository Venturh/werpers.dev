import useTranslation from 'next-translate/useTranslation';
import Button from './Button';

type Props = {
  title: string;
  subtitle?: string;
  button?: { text: string; to: string };
};

const SectionHeader = ({ title, subtitle, button }: Props) => {
  const { t } = useTranslation('portfolio');
  return (
    <div className="pb-1 space-y-2 ">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-semibold sm:text-3xl ">{t(title)}</h1>
        {button ? (
          <Button size="sm" to={button.to}>
            {' '}
            {t(button.text)}
          </Button>
        ) : null}
      </div>
      {subtitle && <h2 className="text-secondary">{t(subtitle)}</h2>}
    </div>
  );
};

export default SectionHeader;
