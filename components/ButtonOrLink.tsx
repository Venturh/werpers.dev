import Link from 'next/link';

type Props = {
  out?: boolean;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

const ButtonOrLink = ({ out, to, onClick, children, className }: Props) => {
  if (!onClick) {
    if (out) {
      return (
        <a
          className={className}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    } else if (onClick) {
      return (
        <Link href={to}>
          <a className={className}> {children}</a>
        </Link>
      );
    } else {
      return (
        <Link href={to}>
          <a className={className}>{children}</a>
        </Link>
      );
    }
  } else {
    return (
      <button
        className={className}
        type="button"
        aria-label="button"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default ButtonOrLink;
