import { Box, Typography } from "@mui/material";

import FilterStyled from "./index.styled";
import SearchBar from "../SearchBar";
import SearchIcon from "../../assets/images/search-normal.svg"

const Filter = (props) => {
  return (
    <FilterStyled>
      <Box className="filter">
        <Typography className="title">
          Filters
        </Typography>
        <SearchBar className="collection-filter" placeholder="Search.." />
        <img className="search-icon" src={SearchIcon} alt="" />
      </Box>
    </FilterStyled>
  )
}

export default Filter;