import { useState } from "react";
import SearchBarStyled from "./index.styled";
import { InputBase } from '@mui/material';
import GradientBorderBox from "../GradientBorderBox";

const SearchBar = (props) => {
  
  const [searchInput, setSearchInput] = useState('');
  const [inputVisible/*, setInputVisible*/] = useState(true);

  // const handleSearchButtonClick = (e) => {
  //   setInputVisible(!inputVisible);
  // };

  const handleValueChange = (e) => {
    setSearchInput(e.target.value);
    if (props.onValueChange) props.onValueChange(e.target.value);
  }

  return (
    <SearchBarStyled className={props.className}>
      <GradientBorderBox>
        <InputBase
          className="search-input"
          placeholder={props.placeholder}
          value={searchInput}
          onChange={handleValueChange}
          onFocus={(e) => e.target.parentElement.classList.add('Mui-focused')}
          style={{ display: inputVisible ? 'block' : 'none' }}
        />
      </GradientBorderBox>
    </SearchBarStyled>
  )
}

export default SearchBar;