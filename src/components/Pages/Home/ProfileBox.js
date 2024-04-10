import { Box, Stack, Typography } from "@mui/material";
import ProfileBoxStyled from "./ProfileBox.styled";

import ImageAvatar from '../../../assets/images/avatar.png';
import AddressBox from "../../AddressBox";
import GradientBorderBox from "../../GradientBorderBox";

const ProfileBox = () => {
  return (
    <ProfileBoxStyled>
      <GradientBorderBox className="profile-box">
        <Box className="profile-info">
          <Box className="image">
            <img src={ImageAvatar} alt="" />
          </Box>
          <Box className="info">
            <Typography className="rank">RANK</Typography>
            <Typography className="value">#1</Typography>
          </Box>
        </Box>
        <Box className="balance">
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography className="desc">Your Balance:</Typography>
              <Typography className="value">165 MATIC</Typography>
            </Box>
            <AddressBox value="0x000...000" />
          </Stack>
        </Box>
      </GradientBorderBox>
    </ProfileBoxStyled>
  )
}

export default ProfileBox;