import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  variant?: 'brand' | 'default' | 'border' | '15';
  className?: string;
};

const Label = ({ children, variant, className }: Props) => (
  <div
    className={clsx(
      'py-0.5 px-1.5 sm:px-2 text-xs sm:text-sm rounded-md leading-5 inline-flex items-center',
      {
        'bg-brand text-brandContrast': variant === 'brand',
        'bg-primary text-primary p-1': variant === 'default',
        'border border-accentBg': variant === 'border',
        'bg-brand15 text-primary dark:text-brand': variant === '15',
      },
      className
    )}
  >
    {children}
  </div>
);

type LabelsProps = {
  labels: string[];
  variant: Props['variant'];
  max?: number;
};

export const Labels = ({ labels, variant, max = 3 }: LabelsProps) => (
  <div className="flex items-center">
    {labels.slice(0, max).map((field) => (
      <span key={field}>
        <Label className="mr-2" variant={variant}>
          {field}
        </Label>
      </span>
    ))}
    {labels.length > 3 && (
      <Label variant={variant}>+ {labels.length - max}</Label>
    )}
  </div>
);

export default Label;
