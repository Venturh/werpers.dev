import styled from "styled-components";
import Link from "next-translate/Link";

import { Button, Subtitle, Text } from "components";

import { ArrowRightUp, Github } from "icons";
import { breakpoints, colors } from "styles";
import { Project } from "pages_/api";

const ProjectList = ({ projects }: Project) => {
  return (
    <List>
      <Table>
        <thead>
          <tr>
            <Subtitle as="th" color="primary">
              Name
            </Subtitle>
            <Subtitle as="th" className="hide-on-mobile" color="primary">
              Build with
            </Subtitle>

            <Subtitle as="th" className="hide-on-mobile" color="primary">
              Progress
            </Subtitle>

            <Subtitle as="th" color="primary">
              Year
            </Subtitle>

            <Subtitle as="th" color="primary">
              Links
            </Subtitle>
          </tr>
        </thead>
        <tbody>
          {projects.map(
            ({ node: { name, year, progress, body, url, giturl, slug } }) => {
              return (
                <tr key={name}>
                  <Title>
                    <Subtitle>{name}</Subtitle>
                  </Title>
                  <Techs>
                    {body[0].fields.map((field, i) => (
                      <span key={field.type}>
                        {field.type}
                        {i !== body[0].fields.length - 1 && <span> - </span>}
                      </span>
                    ))}
                  </Techs>

                  <Progress className="hide-on-mobile">
                    <Text>{progress}</Text>
                  </Progress>
                  <Year>{year}</Year>
                  <Links>
                    <Button
                      out
                      to={giturl}
                      color="primary"
                      iconSize="1.25em"
                      leftIcon={Github}
                    />
                    {url ? (
                      <Button
                        out
                        to={url}
                        color="primary"
                        leftIcon={ArrowRightUp}
                        iconSize="1.25em"
                      />
                    ) : null}
                  </Links>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </List>
  );
};

export default ProjectList;

const List = styled.div`
  tbody tr {
    &:hover,
    &:focus {
      background-color: ${colors.bodyTint};
      border-radius: 1em;
    }
  }
  th {
    text-align: left;
    padding: 0.25em 0.25em;
  }
  td {
    padding: 0.5em 0.5em;
    cursor: default;
  }
  .hide-on-mobile {
    display: none;
    @media (min-width: ${breakpoints.md}) {
      display: table-cell;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    width: 75%;
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const Title = styled.td`
  width: 60%;
  @media (min-width: ${breakpoints.md}) {
    width: 20%;
  }
`;
const Year = styled.td`
  width: 10%;
`;

const Progress = styled.td`
  width: 20%;
`;

const Techs = styled.td`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: inline;
    width: 35%;
  }
`;
const Links = styled.td`
  display: flex;
`;
