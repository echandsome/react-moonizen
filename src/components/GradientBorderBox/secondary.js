import { Box } from "@mui/material";
import GradientSecBorderBoxStyled from "./secondary.styled";

const GradientSecBorderBox = (props) => {
  return (
    <GradientSecBorderBoxStyled>
      <Box {...props} className={`gradient-sec-border-box ${props.className ? props.className : ''}`}>
        <Box className="gradient-border-sec-box-content">
          {props.children}
        </Box>
      </Box>
    </GradientSecBorderBoxStyled>
  )
}

export default GradientSecBorderBox;