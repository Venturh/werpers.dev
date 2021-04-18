import { Label, Labels, SectionHeader } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';

const DesignLabels = () => {
  const labelsArray = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'];
  return (
    <DefaultLayout>
      <DesignLayout>
        <SectionHeader title="labels" />
        <div className="flex flex-col items-start space-y-4">
          <Label variant="default">Label Default</Label>
          <Label variant="brand">Label Brand</Label>
          <Label variant="15">Label Brand15</Label>
          <Label variant="border">Label Border</Label>
        </div>
        <Labels labels={labelsArray} variant="15" />
        <Labels labels={labelsArray} variant="border" />
      </DesignLayout>
    </DefaultLayout>
  );
};

export default DesignLabels;
