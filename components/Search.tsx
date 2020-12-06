import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Icon from './Icon';

import { Search as SearchIcon } from 'icons';

type Props = {
  callback: Function;
};

const Search = ({ callback }: Props) => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const search = (toSearch: string) => {
    setValue(toSearch);
    callback(toSearch);
  };

  return (
    <div className="inline-flex flex-1 w-full overflow-hidden rounded-lg bg-secondary ">
      <Icon
        className="m-4 fill-current bg-secondary text-brand"
        path={SearchIcon}
        colored
      />
      <input
        className="flex-1 w-full bg-secondary "
        type="text"
        placeholder={t('common:search')}
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          search(e.currentTarget.value)
        }
      />
    </div>
  );
};

export default Search;
