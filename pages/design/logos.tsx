import { Logo, SectionHeader } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';

const Logos = () => {
  return (
    <DefaultLayout>
      <DesignLayout>
        <div>
          <SectionHeader title="Logos" />
        </div>
        <div className="space-y-2">
          <Logo type="desktop" />
          <Logo type="mobile" />
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Logos;
