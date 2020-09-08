import styled from "styled-components";

import { Button, Span, Subtitle, Text } from "components";

import { ArrowRightUp, Github, LinkOut } from "icons";
import { breakpoints, colors } from "styles";
import { Project } from "lib/prismic";

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
                      <Span key={field.type}>
                        {field.type}
                        {i !== body[0].fields.length - 1 && <Span> - </Span>}
                      </Span>
                    ))}
                  </Techs>

                  <Progress className="hide-on-mobile">
                    <Text>{progress}</Text>
                  </Progress>
                  <Year>{year}</Year>
                  <Links>
                    <Button
                      to={`/projects/${slug}`}
                      color="bodyContrast"
                      iconSize="1.25em"
                      leftIcon={ArrowRightUp}
                    />
                    <Button
                      out
                      to={giturl}
                      color="bodyContrast"
                      iconSize="1.25em"
                      leftIcon={Github}
                    />
                    {url ? (
                      <Button
                        out
                        to={url}
                        color="bodyContrast"
                        leftIcon={LinkOut}
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
    padding: 0 0.5em;
  }
  td {
    padding: 0.25em 0.25em;
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
    display: table-cell;
    width: 35%;
  }
`;
const Links = styled.td`
  display: flex;
`;
