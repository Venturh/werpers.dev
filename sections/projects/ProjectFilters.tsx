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
  keys: ["buildWith.type"],
};

const ProjectFilter = ({ onFilter, projects }) => {
  const filters = ["React", "Vue", "Electron", "Gatsby", "TypeScript"];

  const [appliedFilters, setAppliedFilters] = useState([]);

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
      <Search data={projects} callback={(filter) => onFilter(filter)} />
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
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 25%;
    margin-bottom: 0;
  }
`;

const Filters = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-wrap: wrap;
    overflow-x: visible;
    button {
      margin-top: 0.25em;
      margin-right: 0.5em;
    }
  }
`;
