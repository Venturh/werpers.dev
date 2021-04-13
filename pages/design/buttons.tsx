import { Button, SectionHeader, IconButton, LanguageSwitch } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';
import { Github, LinkOut } from 'icons';

const Logos = () => {
  return (
    <DefaultLayout>
      <DesignLayout>
        <div>
          <SectionHeader title="Buttons" />
        </div>
        <div className="space-y-4">
          <Button onClick={() => {}}>Click me</Button>
          <div className="flex space-x-2">
            <IconButton
              iconSize="lg"
              rounded
              onClick={() => {}}
              icon={Github}
            />
            <IconButton
              iconSize="lg"
              rounded
              onClick={() => {}}
              icon={LinkOut}
            />
          </div>
          <LanguageSwitch positioned={false} />
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Logos;
