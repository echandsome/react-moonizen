import { Box } from "@mui/material";

import FilterAsideStyled from "./FilterAside.styled";
import Filter from "../../Filter";
import FilterResultBox from "./FilterResultBox";

const FilterAside = () => {
  return (
    <FilterAsideStyled>
      <Box>
        <Filter />
        <FilterResultBox />
      </Box>
    </FilterAsideStyled>
  );
}

export default FilterAside;