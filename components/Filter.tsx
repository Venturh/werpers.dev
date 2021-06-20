import { useState } from 'react';
import clsx from 'clsx';
import Button from 'components/Button';

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
    <Button
      variant={selected ? 'primary' : '15'}
      size="xs"
      onClick={() => select(name)}
      {...rest}
    >
      {name}
    </Button>
  );
};

export default Filter;
