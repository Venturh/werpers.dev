import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { Filter, Search } from 'components';

const options = {
  shouldSort: true,
  threshold: 0.28,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  useExtendedSearch: true,
  keys: ['buildWith.type', 'name'],
};

const ProjectFilter = ({ onFilter, projects }) => {
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

  const handleSearch = (name: string) => {
    if (searchFilter) {
      setAppliedFilters((appliedFilters) =>
        appliedFilters.filter((n) => n !== searchFilter)
      );
    }
    setSearchFilter(name);
    if (name === '') return;
    filterByTag(name);
  };

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
      <Search callback={(name: string) => handleSearch(name)} />
      <div
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="flex space-x-2 overflow-x-scroll "
      >
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

// const Filters = styled.div`
//   margin-top: 1em;
//   display: flex;
//   width: 100%;
//   gap: 0.3em;
//   overflow-x: scroll;
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   ::-webkit-scrollbar {
//     display: none;
//   }
//   @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
//     flex-wrap: wrap;
//     overflow-x: visible;
//     gap: 0.5em;
//   }
// `;
