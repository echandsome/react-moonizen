import { Box, Grid, Stack, Typography } from "@mui/material";
import MintStyled from "./index.styled";

import ImageMintLogo from '../../assets/images/mint-page-logo.png'
import ImageMintOverlay from '../../assets/images/min-welcome-moonizen.png';
import Status from "../../components/Pages/Mint/Status";
import Message from "../../components/Pages/Mint/Message";
import { useState } from "react";

const Mint = () => {
  const [mintStatus, setMintStatus] = useState(false)

  return (
    <MintStyled>
      <Stack>
        <Stack className="title title-bottom-bar" direction={'row'} alignItems={'center'} spacing={1}>
          <img className="title-logo" src={ImageMintLogo} alt="" />
          <Typography className="big-title">
            Mint
          </Typography>
        </Stack>
        <Stack className="mint-content" mt={3.5}>
          <Box>
            <Grid container spacing={4}>
              <Grid item lg={6} xs={12}>
                <Box className="card-overlay">
                  <Box className="image-wrapper">
                    <img src={ImageMintOverlay} alt="" />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12}>
                <Status mintStatus={mintStatus} setMintStatus={setMintStatus} />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Message mintStatus={mintStatus} />
          </Box>
        </Stack>
      </Stack>
    </MintStyled>
  )
}

export default Mint;