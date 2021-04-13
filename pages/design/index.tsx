import { SectionHeader, Logo } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';

const Design = () => {
  return (
    <DefaultLayout>
      <DesignLayout>
        <div>
          <SectionHeader title="Design" />
        </div>
        <div className="space-y-2">
          <Logo type="mobile" />
          <Logo type="desktop" />
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Design;
