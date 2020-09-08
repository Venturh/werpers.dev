import styled from "styled-components";

import { Filter, Subtitle } from "components";

const ProjectFilter = ({ setFilters }) => {
  const filters = ["React", "Vue", "Electron", "Gatsby", "TypeScript"];

  return (
    <Wrapper>
      <Subtitle>Filter</Subtitle>
      <Filters>
        {filters.map((filter) => (
          <Filter
            key={filter}
            name={filter}
            callback={(name: string) => setFilters(name)}
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
  flex-wrap: wrap;
  button {
    margin-top: 0.25em;
    margin-right: 0.5em;
  }
`;
