import ButtonOrLink from './ButtonOrLink';
type Props = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
};

const Button = ({ children, to, onClick }: Props) => (
  <ButtonOrLink
    onClick={onClick}
    className="inline-flex items-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm text-brandContrast bg-brand hover:bg-brandDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand15"
    to={to}
  >
    {children}
  </ButtonOrLink>
);

export default Button;
