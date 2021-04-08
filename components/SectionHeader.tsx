import Button from './Button';

type Props = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  to?: string;
};

const SectionHeader = ({ title, subtitle, buttonText, to }: Props) => {
  return (
    <div className="pb-2 space-y-2 border-b border-accentBg">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-3xl font-semibold ">{title}</h2>
        {buttonText ? <Button to={to}> {buttonText}</Button> : null}
      </div>
      <h3 className="lg:text-lg text-secondary">{subtitle}</h3>
    </div>
    //     <div class="pb-5 border-b border-gray-200">
    //   <h3 class="text-lg leading-6 font-medium text-gray-900">
    //     Job Postings
    //   </h3>
    //   <p class="mt-2 max-w-4xl text-sm text-gray-500">Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.</p>
    // </div>
  );
};

export default SectionHeader;
