import { Label, SectionHeader } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';

const Labels = () => {
  return (
    <DefaultLayout>
      <DesignLayout>
        <div>
          <SectionHeader title="Labels" />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Label variant="default">Label Default</Label>
          <Label variant="brand">Label Brand</Label>
          <Label variant="15">Label Brand15</Label>
          <Label variant="border">Label Border</Label>
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Labels;
