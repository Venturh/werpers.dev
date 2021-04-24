import { useRouter } from 'next/router';
import Dropdown from './Dropdown';
import { Language2, Language3 } from 'icons';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

const LanguageSwitch = ({ withDisplay = false }) => {
  const { lang } = useTranslation();

  const { push, pathname, query } = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(
    lang === 'en' ? 'English' : 'Deutsch'
  );

  useEffect(() => {
    setCurrentLanguage(lang === 'en' ? 'English' : 'Deutsch');
  }, [lang]);

  const allLanguages = [
    { name: 'Deutsch', icon: Language2 },
    { name: 'English', icon: Language2 },
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
      options={allLanguages}
      onClick={(name) => changeLanguage(name)}
      withIcon={Language3}
      withDisplay={withDisplay}
      defaultSelected={currentLanguage}
    />
  );
};

export default LanguageSwitch;
