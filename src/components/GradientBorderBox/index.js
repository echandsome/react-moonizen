import { Box } from "@mui/material";
import GradientBorderBoxStyled from "./index.styled";

const GradientBorderBox = (props) => {
  return (
    <GradientBorderBoxStyled>
      <Box {...props} className={`gradient-border-box ${props.className ? props.className : ''}`}>
        <Box className="gradient-border-box-content">
          {props.children}
        </Box>
      </Box>
    </GradientBorderBoxStyled>
  )
}

export default GradientBorderBox;