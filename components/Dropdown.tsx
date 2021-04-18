import clsx from 'clsx';
import { Icon } from 'components';
import { ArrowDownS, Menu1 } from 'icons';
import { useEffect, useRef, useState } from 'react';

type Props = {
  options: { icon?: string; name: string }[];
  withDisplay?: boolean;
  withIcon?: string;
  direction?: 'topRight' | 'topLeft';
  onClick: (name: string) => void;
};

const Dropdown = ({
  options,
  withDisplay = false,
  withIcon,
  direction = 'topRight',
  onClick,
}: Props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
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
  return (
    <div ref={displayRef} className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={clsx(
            'flex items-center text-primary focus:outline-none focus:ring-1 focus:ring-brand',
            {
              'rounded-full': !withDisplay,
              'ring-1 ring-accentBg rounded-md px-2 py-1 hover:ring-brand': withDisplay,
            }
          )}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          {!withDisplay && <span className="sr-only">Open options</span>}
          {withDisplay && <span className="text-sm">{options[0].name}</span>}
          <Icon path={withDisplay ? ArrowDownS : withIcon || Menu1} colored />
        </button>
      </div>
      <div
        ref={dropdownRef}
        className={clsx(
          'absolute z-50 w-32 mt-2 rounded-md shadow-sm ring-1 bg-primary ring-accentBg focus:outline-none',
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
              className="flex items-center w-full px-4 py-2 space-x-2 text-sm text-primary hover:bg-secondaryBg focus:outline-none focus:ring-1 focus:ring-brand"
              role="menuitem"
              tabIndex={-1}
              id={`menu-item-${name}`}
              key={name}
              onClick={() => {
                onClick(name);
                setToggleDropdown(false);
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
