import clsx from 'clsx';
import { SectionHeader } from 'components';

type Props = {
  title: string;
  subtitle?: string;
  button?: { text: string; to: string };
  children: React.ReactChild;
};

const Section = ({ title, subtitle, button, children }: Props) => (
  <div className="space-y-2">
    <SectionHeader title={title} subtitle={subtitle} button={button} />
    <div>{children}</div>
  </div>
);

export default Section;
