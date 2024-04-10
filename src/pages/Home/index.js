import { Box, Grid, Stack, Typography } from "@mui/material";
import HomeStyled from "./index.styled";
import ProfileBox from "../../components/Pages/Home/ProfileBox";
import ClaimBox from "../../components/Pages/Home/ClaimBox";
import MoonizensOwned from "../../components/Pages/Home/MoonizensOwned";
import Quadrocar from "../../components/Pages/Home/Quadrocar";
import RecentTransactions from "../../components/Pages/Home/RecentTransactions";
import GradientBorderBox from "../../components/GradientBorderBox";

const Home = () => {
  return (
    <HomeStyled>
      <Stack spacing={1}>
        <Box className="title">
          <Typography className="small-title">
            WELCOME
          </Typography>
          <Typography className="big-title">
            MOONIZEN
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xl={4} md={12} xs={12}>
              <Stack spacing={3}>
                <ProfileBox />
                <ClaimBox />
              </Stack>
            </Grid>
            <Grid item xl={8} md={12} xs={12}>
              <Box>
                <Stack spacing={3}>
                  <Box>
                    <Grid container className="owned-box" spacing={2}>
                      <Grid item lg={3} xs={12}>
                        <GradientBorderBox className="owned-box-item">
                          <MoonizensOwned />
                        </GradientBorderBox>
                      </Grid>
                      <Grid item lg={6} xs={12}>
                        <GradientBorderBox className="owned-box-item quadrocar">
                          <Quadrocar />
                        </GradientBorderBox>
                      </Grid>
                      <Grid item lg={3} xs={12}>
                        <GradientBorderBox className="owned-box-item">
                        </GradientBorderBox>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box>
                    <RecentTransactions />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </HomeStyled>
  )
}

export default Home;