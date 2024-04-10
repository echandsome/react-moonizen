import { Box, Link } from "@mui/material";
import FilterResultBoxStyled from "./FilterResultBox.styled";
import GradientBorderBox from "../../GradientBorderBox";

const listData = [
  'Helmets',
  'Backgrounds',
  'Sigils',
  'Sigils',
  'Sigils',
  'Sigils',
  'Sigils',
  'Sigils',
  'Sigils',
  'Sigils',
  'Sigils',
  'Uniforms',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
  'Biometrics',
];

const FilterResultBox = () => {
  return (
    <FilterResultBoxStyled>
      <GradientBorderBox className="filter-result-box">
        <Box className="filter-wrapper">
          {
            listData.map((item, index) => {
              return (
                <Link key={index} href="#" className="link">{item}</Link>
              )
            })
          }
        </Box>
      </GradientBorderBox>
    </FilterResultBoxStyled>
  )
}

export default FilterResultBox;