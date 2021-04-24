import { useState } from 'react';
import clsx from 'clsx';

type FilterProps = {
  name: string;
  callback: Function;
};

const Filter = ({ name, callback, ...rest }: FilterProps) => {
  const [selected, setSelected] = useState(false);

  const select = (name: string) => {
    setSelected(!selected);
    callback(name);
  };

  return (
    <div
      className={clsx(
        'p-2 text-sm inline-flex rounded-lg bg-brand15 text-primary items-center justify-center cursor-pointer hover:border-brand border  ',
        { 'border-brand ': selected, 'border-accent': !selected }
      )}
      onClick={() => select(name)}
      {...rest}
    >
      <span>{name}</span>
    </div>
  );
};

export default Filter;
