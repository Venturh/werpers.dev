import Button from './Button';

type Props = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  to?: string;
};

const SectionHeader = ({ title, subtitle, buttonText, to }: Props) => {
  return (
    <div className="pb-2 space-y-2 ">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-3xl font-semibold ">{title}</h2>
        {buttonText ? <Button to={to}> {buttonText}</Button> : null}
      </div>
      <h3 className="lg:text-lg text-secondary">{subtitle}</h3>
    </div>
  );
};

export default SectionHeader;
