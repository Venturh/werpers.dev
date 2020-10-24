import { useState } from "react";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import Icon from "./Icon";

import { Search as SearchIcon } from "icons";
import { colors } from "styles";

type SearchProps = {
  callback: Function;
};

const Search = ({ callback }: SearchProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const search = (toSearch: string) => {
    setValue(toSearch);
    callback(toSearch);
  };

  return (
    <Wrapper>
      <StyledSearchIcon path={SearchIcon} size="1.1em" color="primary" />
      <Input
        type="text"
        placeholder={t("common:search")}
        value={value}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          search(e.currentTarget.value)
        }
      />
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  position: relative;
`;

const StyledSearchIcon = styled(Icon)`
  position: absolute;
  top: 22.5%;
  left: 0.5em;
  z-index: 1;
`;

const Input = styled.input`
  border: 2px solid transparent;
  border-radius: 0.25em;
  height: 2em;
  width: 100%;
  padding: 0 2em;
  transition: all 300ms ease;
  color: ${colors.bodyContrast};
  background-color: ${colors.card};
  &:hover {
    border: 2px solid ${colors.primary};
  }
  &:focus {
    border: 2px solid ${colors.primary};
    outline: 0;
  }
`;
