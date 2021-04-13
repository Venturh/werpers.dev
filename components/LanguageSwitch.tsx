import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Icon from './Icon';
import { Language2, Language3 } from 'icons';
import IconButton from './IconButton';
import clsx from 'clsx';

const LanguageSwitch = ({ positioned = true }) => {
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

  const handleClickOutside = (e: any) => {
    if (
      dropdownRef.current.contains(e.target) ||
      displayRef.current.contains(e.target)
    ) {
      return;
    }
    setToggleDropdown(false);
  };

  const onChangeLang = (lang: string) => {
    push(
      { pathname, query },
      { pathname, query },
      { locale: lang === 'Deutsch' ? 'de' : 'en' }
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
        className={clsx({
          hidden: !toggleDropdown,
          'flex flex-col  p-2 rounded-md absolute space-y-2 shadow-sm ring-1 bg-primary ring-accentBg': toggleDropdown,
          'top-8 right-1 ': positioned,
          'top-8 ': !positioned,
        })}
        ref={dropdownRef}
      >
        {allLanguages.map((language) => (
          <div
            className="flex items-center space-x-1 rounded-md cursor-pointer text-primary hover:text-brand"
            key={language}
            onClick={() => onChangeLang(language)}
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
