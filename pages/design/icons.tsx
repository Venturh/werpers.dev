import { Icon, Link } from 'components';
import { DefaultLayout, DesignLayout } from 'components/layouts';
import * as icons from 'icons';
import useTranslation from 'next-translate/useTranslation';
const Icons = () => {
  const { t } = useTranslation('portfolio');
  return (
    <DefaultLayout>
      <DesignLayout title="icons">
        <div className="grid grid-flow-row grid-cols-3 gap-12 sm:grid-cols-4">
          {Object.entries(icons).map((icon) => (
            <div key={icon[1]} className="flex flex-col items-center space-y-2">
              <Icon path={icon[1]} />
              <span className="text-sm">{icon[0]}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-right">
          Icons {t('from')}{' '}
          <Link to="https://remixicon.com/" underline out>
            Remix Icons
          </Link>{' '}
          {t('and')}{' '}
          <Link to="https://simpleicons.org/" underline out>
            Simple Icons
          </Link>
        </p>
      </DesignLayout>
    </DefaultLayout>
  );
};

export default Icons;
