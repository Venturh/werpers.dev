import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

import { Filter } from 'components';

import { Project } from '@types';

const options = {
  shouldSort: true,
  threshold: 0.28,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  useExtendedSearch: true,
  keys: ['tech', 'title'],
};

const ProjectFilter = ({
  onFilter,
  projects,
}: {
  onFilter: any;
  projects: Project[];
}) => {
  const filters = [
    'React',
    'Vue',
    'Next.js',
    'Gatsby',
    'Electron',
    'TypeScript',
  ];

  const [appliedFilters, setAppliedFilters] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  const filterByTag = (name: string) => {
    const find = appliedFilters.findIndex((n) => n === name);
    if (find !== -1) {
      setAppliedFilters((appliedFilters) =>
        appliedFilters.filter((n) => n !== name)
      );
    } else {
      setAppliedFilters((appliedFilters) => [...appliedFilters, name]);
    }
  };

  useEffect(() => {
    if (appliedFilters.length === 0) {
      onFilter(projects);
      return;
    }
    const fuse = new Fuse(projects, options);
    const result = fuse
      .search(appliedFilters.join(' | '))
      .map((item) => item.item);
    onFilter(result);
  }, [appliedFilters]);

  return (
    <div className="space-y-4">
      <div className="flex space-x-2 overflow-x-scroll">
        {filters.map((filter: string) => (
          <Filter
            key={filter}
            name={filter}
            callback={(name: string) => filterByTag(name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
