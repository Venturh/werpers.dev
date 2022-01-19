import { useState, useEffect } from 'react';
import { CollectionIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

import LanguageSwitch from './LanguageSwitch';

import ThemeToggle from './ThemeToggle';
import IconButton from './IconButton';
import Icon from './Icon';
import { Github } from 'icons';
import Link from './Link';
import Label from './Label';

export default function Navigation() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between w-full h-16 bg-primary">
      <Link to="/">
        <Label> werpers.dev</Label>
      </Link>
      <div className="flex items-center divide-x divide-accent-primary">
        <div className="pr-2">
          <IconButton
            title="Projects"
            variant="ghost"
            to="/projects"
            ariaLabel="projects"
            fullRounded
            size="sm"
            icon={<CollectionIcon />}
          />
        </div>
        <div className="px-2">
          <IconButton
            title="Github"
            variant="ghost"
            to="https://github.com/Venturh/werpers.dev"
            out
            ariaLabel="github-icon"
            fullRounded
            size="sm"
            icon={<Icon colored path={Github} />}
          />
        </div>
        <div className="pl-2 space-x-2">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
