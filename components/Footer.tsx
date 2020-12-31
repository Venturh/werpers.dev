import styled from 'styled-components';

import { socials } from 'content';
import IconButton from './IconButton';
import { useEffect, useState } from 'react';
import { BaseCard } from './ProjectCard';
import { useTranslation } from 'next-translate';

const Footer = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const count = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.countapi.xyz/get/${process.env.NEXT_PUBLIC_VIEWCOUNT_KEY}/viewcount`
      );
      const json: { value: number } = await res.json();
      setCount(json.value);
      setLoading(false);
    };
    count();
  }, []);
  return (
    <div className="flex flex-col flex-shrink-0 w-1/2 p-8 space-y-4 ">
      <BaseCard>
        {t('common:views')}
        <div>{loading ? '---' : count}</div>
      </BaseCard>
      <div className="flex justify-center space-x-4 ">
        {socials.map(({ link, icon }) => (
          <IconButton
            className="fill-current text-secondary"
            iconSize="md"
            to={link}
            key={link}
            icon={icon}
            colored
            rounded
            outlined
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
