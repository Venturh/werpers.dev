import styled from "styled-components";
import Fuse from "fuse.js";
import { Filter, Search } from "components";
import { useEffect, useState } from "react";

const options = {
  shouldSort: true,
  threshold: 0.28,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  useExtendedSearch: true,
  keys: ["buildWith.type", "name"],
};

const ProjectFilter = ({ onFilter, projects }) => {
  const filters = [
    "React",
    "Vue",
    "Next.js",
    "Gatsby",
    "Electron",
    "TypeScript",
  ];

  const [appliedFilters, setAppliedFilters] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const handleSearch = (name: string) => {
    if (searchFilter) {
      setAppliedFilters((appliedFilters) =>
        appliedFilters.filter((n) => n !== searchFilter)
      );
    }
    setSearchFilter(name);
    if (name === "") return;
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
    const test = appliedFilters.join(" | ");
    const result = fuse.search(test).map((item) => item.item);
    onFilter(result);
  }, [appliedFilters]);

  return (
    <Wrapper>
      <Search callback={(name: string) => handleSearch(name)} />
      <Filters>
        {filters.map((filter) => (
          <Filter
            key={filter}
            name={filter}
            callback={(name: string) => filterByTag(name)}
          />
        ))}
      </Filters>
    </Wrapper>
  );
};

export default ProjectFilter;

const Wrapper = styled.div`
  margin-bottom: 1em;
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 25%;
    margin-bottom: 0;
  }
`;

const Filters = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  gap: 0.3em;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
    overflow-x: visible;
    gap: 0.5em;
  }
`;
