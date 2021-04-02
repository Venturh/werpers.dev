import Navigation from './Navigation';
import Footer from './Footer';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <main className="flex flex-col items-center min-h-screen mx-auto space-y-6 text-base max-w-xsm md:max-w-2xl lg:text-lg lg:max-w-3xl">
      <Navigation />
      <div className={clsx(className, 'md:max-w-3xl flex flex-col flex-auto')}>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
