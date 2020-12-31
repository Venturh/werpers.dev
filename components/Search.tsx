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
    <div className="relative shadow-sm w-fullrounded-md">
      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none sm:pl-3">
        <Icon
          className="ml-2 fill-current bg-secondary text-brand"
          path={SearchIcon}
          colored
        />
      </div>
      <input
        className="block w-full py-1.5 border-none rounded-lg outline-none pl-9 sm:pl-14 bg-secondary focus:ring focus:ring-brand"
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
