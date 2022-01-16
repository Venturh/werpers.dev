import { useState } from 'react';

import Button from './Button';

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
    <div className="py-1">
      <Button
        variant={selected ? 'oppacity' : 'ghost'}
        size="xs"
        onClick={() => select(name)}
        {...rest}
      >
        {name}
      </Button>
    </div>
  );
};

export default Filter;
