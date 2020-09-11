import styled from "styled-components";
import Fuse from "fuse.js";
import Icon from "./Icon";

import { Search as SearchIcon } from "icons";
import { colors } from "styles";
import { useState } from "react";

type SearchProps = {
  callback: Function;
  data: any;
};

const options = {
  shouldSort: true,
  threshold: 0.28,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["name", "buildWith.type"],
};

const Search = ({ callback, data }: SearchProps) => {
  const [value, setValue] = useState("");
  const search = (toSearch: string) => {
    setValue(toSearch);
    if (toSearch === "") {
      callback(data);
      return;
    }
    const fuse = new Fuse(data, options);
    const result = fuse.search(value).map((item) => item.item);
    callback(result);
  };

  return (
    <Wrapper>
      <Searchs path={SearchIcon} size="1.2em" color="primary" />
      <Input
        type="text"
        placeholder="Search"
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

const Searchs = styled(Icon)`
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 1;
`;

const Input = styled.input`
  border: 2px solid transparent;
  border-radius: 0.25em;
  height: 2em;
  width: 100%;
  padding: 0 20%;
  transition: all 300ms ease;
  color: ${colors.bodyContrast};
  background-color: ${colors.bodyTint};
  &:hover {
    border: 2px solid ${colors.primary};
  }
  &:focus {
    border: 2px solid ${colors.primary};
    outline: 0;
  }
`;
