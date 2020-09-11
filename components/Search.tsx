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
      <Icon path={SearchIcon} size="1.2em" color="primary" />
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${colors.bodyTint};

  :hover {
    border: 1px solid ${colors.primary};
  }
`;

const Input = styled.input`
  margin-left: 1em;
  height: 100%;
  color: ${colors.bodyContrast};
`;
