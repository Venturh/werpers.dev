import { useRouter } from 'next/router';
import Dropdown from './Dropdown';
import { Language2, Language3 } from 'icons';

const LanguageSwitch = ({ positioned = true }) => {
  const { push, pathname, query } = useRouter();

  const allLanguages = [
    { name: 'Deutsch', icon: Language2 },
    { name: 'Englisch', icon: Language2 },
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
    />
  );
};

export default LanguageSwitch;
