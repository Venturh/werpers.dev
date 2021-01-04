import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Icon from './Icon';
import { Language2, Language3 } from 'icons';
import IconButton from './IconButton';

const LanguageSwitch = () => {
  const { lang } = useTranslation();
  const { push, pathname, query } = useRouter();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>();
  const displayRef = useRef<HTMLInputElement>();

  const allLanguages: string[] = ['Deutsch', 'Englisch'];

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleDropdown]);

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current.contains(e.target) ||
      displayRef.current.contains(e.target)
    ) {
      return;
    }
    setToggleDropdown(false);
  };

  const onChangeLang = () => {
    push(
      { pathname, query },
      { pathname, query },
      { locale: lang === 'en' ? 'de' : 'en' }
    );
    setToggleDropdown(false);
  };

  return (
    <div className="relative" ref={displayRef}>
      <IconButton
        rounded
        icon={Language3}
        onClick={() => setToggleDropdown(!toggleDropdown)}
      />
      <div
        className={
          !toggleDropdown
            ? 'hidden'
            : 'flex flex-col justify-center items-center  right-0 w-32 rounded-lg h-24 absolute top-9 md:top-12 md:right-1 space-y-4 bg-secondary'
        }
        ref={dropdownRef}
      >
        {allLanguages.map((language) => (
          <div
            className="flex items-center space-x-1 rounded-md cursor-pointer text-primary hover:text-brand "
            key={language}
            onClick={() => onChangeLang()}
          >
            <Icon className="fill-current" colored path={Language2} />
            <span>{language}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitch;
