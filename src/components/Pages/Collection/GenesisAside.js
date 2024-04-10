import { Box, Stack, Grid, Typography } from "@mui/material";

import GenesisAsideStyled from "./GenesisAsideStyled";
import ImageGenesisLogo from "../../../assets/images/genesis-icon.svg";
import GenesisAvatar from "./GenesisAvatar";
import GenesisRightAside from "./GenesisRightAside";

import ImageAvatar1 from '../../../assets/images/table-image-1.png';
import ImageAvatar2 from '../../../assets/images/table-image-2.png';
import ImageAvatar3 from '../../../assets/images/table-image-3.png';
import ImageAvatar4 from '../../../assets/images/table-image-4.png';
import ImageAvatar5 from '../../../assets/images/table-image-5.png';
import { useState } from "react";
import CollectionView from "./CollectionView";

const data = [
  ImageAvatar1, ImageAvatar2, ImageAvatar3, ImageAvatar4, ImageAvatar5,
  ImageAvatar1, ImageAvatar2, ImageAvatar3, ImageAvatar4, ImageAvatar5,
  ImageAvatar1, ImageAvatar2, ImageAvatar3, ImageAvatar4, ImageAvatar5,
]

const GenesisAside = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GenesisAsideStyled>
      <CollectionView isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <Stack>
        <Stack className="title title-bottom-bar" direction={'row'} spacing={1} alignItems={'center'}>
          <img className="title-logo" src={ImageGenesisLogo} alt="" />
          <Typography className="genesis-title">
            Genesis
          </Typography>
        </Stack>
        <Grid container spacing={4} className="content">
          <Grid item lg={9} className="gradient-border-box genesis-box">
            <Box className="gradient-border-box genesis-wrapper">
              <Grid container spacing={2.5}>
                {
                  data.map((item, index) => {
                    return (
                      <Grid key={index} item xl={12 / 5} lg={3} md={4} sm={4} xs={6} className="avatar-item">
                        <GenesisAvatar onClick={() => setIsModalOpen(true)} src={item} />
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={3} className="genesis-right-wrapper">
            <GenesisRightAside />
          </Grid>
        </Grid>
      </Stack>
    </GenesisAsideStyled>
  );
}

export default GenesisAside;