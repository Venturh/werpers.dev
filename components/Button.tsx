import ButtonOrLink from './ButtonOrLink';
type Props = {
  children: React.ReactNode;
  to?: string;
};

const Button = ({ children, to }: Props) => (
  <ButtonOrLink
    className="inline-flex items-center px-2 py-1.5 text-sm font-medium border-none rounded-md shadow-sm outline-none lg:px-4 text-brandContrast bg-brand
     hover:bg-brandDarker focus:ring-2 focus:ring-offset focus:ring-primaryText"
    to={to}
  >
    {children}
  </ButtonOrLink>
);

export default Button;
