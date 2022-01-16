import SectionHeader from './SectionHeader';

type Props = {
  title: string;
  subtitle?: string;
  button?: { text: string; to: string };
  children: React.ReactChild;
};

export default function Section({ title, subtitle, button, children }: Props) {
  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} button={button} />
      <div className="mt-4">{children}</div>
    </div>
  );
}
