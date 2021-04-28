import clsx from 'clsx';
import { SectionHeader } from 'components';

type Props = {
  title: string;
  subtitle?: string;
  button?: { text: string; to: string };
  withPadding?: boolean;
  children: React.ReactChild;
};

const Section = ({
  title,
  subtitle,
  button,
  withPadding = true,
  children,
}: Props) => (
  <div className="space-y-2">
    <SectionHeader title={title} subtitle={subtitle} button={button} />
    <div className={clsx({ 'sm:px-4': withPadding })}>{children}</div>
  </div>
);

export default Section;
