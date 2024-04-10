import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import StatusStyled from "./Status.styled";

import ImageBoxBorder from '../../../assets/images/mint-status-box-border.png';
import ImageButtonBorder from '../../../assets/images/mint-status-button-border.png';
import ImageBorderBox from "../../ImageBorderBox";
import GradientBorderBox from "../../GradientBorderBox";
import ImageCardLines from '../../../assets/images/stats-card-lines.png'
import ImageMintLeftButtonBg from '../../../assets/images/mint-left-button-bg.png';
import ImageMintRightButtonBg from '../../../assets/images/mint-right-button-bg.png';

const Status = ({ mintStatus, setMintStatus }) => {
  return (
    <StatusStyled>
      <Stack spacing={3}>
        <Box className="status-box">
          <ImageBorderBox image={ImageBoxBorder} >
            <GradientBorderBox className="status-box-inner">
              <Typography textAlign={'center'} className="title">STATUS</Typography>
              <Stack spacing={1.5}>
                <Box className="card-lines">
                  <img src={ImageCardLines} alt="" />
                </Box>
                <Box className="status-content">
                  <GradientBorderBox>
                    <textarea className="" defaultValue={"Total Supply\nRemaining Supply\nPrice\nCreator Earnings"} />
                  </GradientBorderBox>
                </Box>
              </Stack>
            </GradientBorderBox>
          </ImageBorderBox>
        </Box>
        <Box className="buttons">
          <Grid container spacing={3}>
            <Grid item lg={6} xs={6}>
              <Box className="button-wrapper">
                <ImageBorderBox image={ImageButtonBorder} >
                  <GradientBorderBox className="btn-mint-wrapper">
                    <GradientBorderBox>
                      <Button onClick={() => setMintStatus(!mintStatus)} className="btn-mint">MiNT</Button>
                    </GradientBorderBox>
                  </GradientBorderBox>
                </ImageBorderBox>
              </Box>
            </Grid>
            <Grid item lg={6} xs={6}>
              {
                mintStatus
                  ? (
                    <Grid container spacing={1.5} className="on-mint-button-group">
                      <Grid item lg={3} xs={3}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} className="on-mint-btn-wrapper">
                          <Box className="on-mint-button-item small left">
                            <Button className="btn-mint image-bg" sx={{ backgroundImage: `url(${ImageMintLeftButtonBg})` }}></Button>
                          </Box>
                          {/* <GradientBorderBox className="on-mint-button-item small"> */}
                          {/* </GradientBorderBox> */}
                        </Stack>
                      </Grid>
                      <Grid item lg={6} xs={6}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} className="on-mint-btn-wrapper big">
                          <GradientBorderBox className="on-mint-button-item big">
                            <GradientBorderBox>
                              <Button className="btn-mint btn-mint-big"></Button>
                            </GradientBorderBox>
                          </GradientBorderBox>
                        </Stack>
                      </Grid>
                      <Grid item lg={3} xs={3}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} className="on-mint-btn-wrapper">
                          <Box className="on-mint-button-item small right">
                            <Button className="btn-mint image-bg" sx={{ backgroundImage: `url(${ImageMintRightButtonBg})` }}></Button>
                          </Box>
                          {/* <GradientBorderBox className="on-mint-button-item small"> */}
                          {/* </GradientBorderBox> */}
                        </Stack>
                      </Grid>
                    </Grid>
                  ) : (
                    <ImageBorderBox image={ImageButtonBorder} >
                      <GradientBorderBox className="btn-mint-wrapper">
                        <GradientBorderBox>
                          <Button className="btn-mint"></Button>
                        </GradientBorderBox>
                      </GradientBorderBox>
                    </ImageBorderBox>
                  )
              }
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </StatusStyled>
  )
}

export default Status;