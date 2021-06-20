import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Icon, IconButton } from 'components';
import { ArrowDownS, Menu1 } from 'icons';

type Props = {
  options: { icon?: string; name: string }[];
  withDisplay?: boolean;
  withIcon?: string;
  defaultSelected?: string;
  direction?: 'topRight' | 'topLeft';
  onClick: (name: string) => void;
};

const Dropdown = ({
  options,
  withDisplay = false,
  withIcon,
  direction = 'topRight',
  onClick,
  defaultSelected,
}: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selected, setSelected] = useState(options[0].name);
  const dropdownRef = useRef<HTMLInputElement>();
  const displayRef = useRef<HTMLInputElement>();

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

  const handleChange = (name: string) => {
    onClick(name);
    setToggleDropdown(false);
    setSelected(name);
  };
  return (
    <div ref={displayRef} className="relative inline-block text-left">
      {withDisplay && (
        <button
          type="button"
          className="flex items-center px-2 py-1 rounded-md text-primary focus:outline-none focus:ring-1 focus:ring-brand ring-1 ring-accent hover:ring-brand"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          <span className="text-sm">{defaultSelected || selected}</span>

          <Icon path={withDisplay ? ArrowDownS : withIcon || Menu1} colored />
        </button>
      )}
      {!withDisplay && (
        <IconButton
          icon={withDisplay ? ArrowDownS : withIcon || Menu1}
          aria-expanded="true"
          aria-haspopup="true"
          rounded
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          {withDisplay && (
            <span className="text-sm">{defaultSelected || selected}</span>
          )}
        </IconButton>
      )}
      <div
        ref={dropdownRef}
        className={clsx(
          'absolute z-50 w-32 mt-2 rounded-md shadow-sm ring-1 bg-primary ring-accent focus:outline-none',
          {
            hidden: !toggleDropdown,
            'origin-top-left left-0': direction === 'topLeft',
            'origin-top-right right-0': direction === 'topRight',
          }
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          {options.map(({ name, icon }) => (
            <button
              className="flex items-center w-full px-4 py-2 space-x-2 text-sm text-primary hover:bg-bg-secondary focus:outline-none focus:ring-1 focus:ring-brand"
              role="menuitem"
              tabIndex={-1}
              id={`menu-item-${name}`}
              key={name}
              onClick={() => {
                handleChange(name);
              }}
            >
              {icon && <Icon className="fill-current" colored path={icon} />}
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
