import { Box, Button, Stack } from "@mui/material";
import ClaimBoxStyled from "./claimBox.styled";

import ImageIsometricCubic from '../../../assets/images/isometric-cubic.png';
import GradientBorderBox from "../../GradientBorderBox";

const ClaimBox = () => {
  return (
    <ClaimBoxStyled>
      <GradientBorderBox className="claim-box">
        <Box className="claim-box-content">
          <Stack className="image" alignItems={'center'} justifyContent={'center'}>
            <img src={ImageIsometricCubic} alt="" />
          </Stack>
          <Box className="claim-button-wrapper">
            <Button className="claim-button gradient-border-box">CLAIM</Button>
          </Box>
        </Box>
      </GradientBorderBox>
    </ClaimBoxStyled>
  )
}

export default ClaimBox;