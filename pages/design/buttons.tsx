import {
  Button,
  SectionHeader,
  IconButton,
  LanguageSwitch,
  Dropdown,
} from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';
import { Github, LinkOut } from 'icons';

const Logos = () => {
  const dropdownItems = [
    { name: 'Frontend' },
    { name: 'Backend' },
    { name: 'Fullstack' },
  ];
  return (
    <DefaultLayout>
      <DesignLayout>
        <SectionHeader title="buttons" />
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
          <div className="flex items-center space-x-8 ">
            <Dropdown
              onClick={() => {}}
              options={dropdownItems}
              direction="topLeft"
              withDisplay
            />
            <Dropdown
              onClick={() => {}}
              options={dropdownItems}
              direction="topRight"
            />
          </div>
        </div>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Logos;
