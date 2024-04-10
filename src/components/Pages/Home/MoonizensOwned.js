import { Box, Stack, Typography } from "@mui/material";
import MoonizensOwnedStyled from "./MoonizensOwned.styled";
import ImageIconGenisis from '../../../assets/images/moonizens-genesis.svg';

const MoonizensOwned = () => {
  return (
    <MoonizensOwnedStyled>
      <Stack className="moonizens-owned-box" direction={'column'} justifyContent={'space-between'}>
        <Box className="icon">
          <img src={ImageIconGenisis} alt="" />
        </Box>
        <Typography className="value">
          32
        </Typography>
        <Typography className="desc">
          Moonizens Owned
        </Typography>
      </Stack>
    </MoonizensOwnedStyled>
  )
}

export default MoonizensOwned;