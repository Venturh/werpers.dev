import clsx from 'clsx';
import { SectionHeader } from 'components';

type Props = {
  title: string;
  subtitle?: string;
  button?: { text: string; to: string };
  children: React.ReactChild;
};

const Section = ({ title, subtitle, button, children }: Props) => (
  <div>
    <SectionHeader title={title} subtitle={subtitle} button={button} />
    <div className="mt-4">{children}</div>
  </div>
);

export default Section;
