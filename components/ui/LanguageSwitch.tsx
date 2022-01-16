import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { TranslateIcon, GlobeAltIcon } from '@heroicons/react/outline';

import Dropdown from './Dropdown';

export default function LanguageSwitch({ withDisplay = false }) {
  const { lang } = useTranslation();

  const { push, pathname, query } = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(
    lang === 'en' ? 'English' : 'Deutsch'
  );

  useEffect(() => {
    setCurrentLanguage(lang === 'en' ? 'English' : 'Deutsch');
  }, [lang]);

  const allLanguages = [
    { name: 'Deutsch', icon: <GlobeAltIcon /> },
    { name: 'English', icon: <GlobeAltIcon /> },
  ];

  const changeLanguage = (lang: string) => {
    push(
      { pathname, query },
      { pathname, query },
      { locale: lang === 'Deutsch' ? 'de' : 'en' }
    );
  };

  return (
    <Dropdown
      options={allLanguages.filter(
        (language) => language.name !== currentLanguage
      )}
      onClick={(name) => changeLanguage(name)}
      icon={withDisplay ? undefined : <TranslateIcon />}
      withDisplay={withDisplay}
      defaultSelected={currentLanguage}
    />
  );
}
