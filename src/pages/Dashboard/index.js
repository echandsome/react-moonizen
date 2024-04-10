import { Typography, Stack, Box, Grid } from "@mui/material";
import DashboardStyled from "./index.styled";

import ImageDashboardLogo from '../../assets/images/dashboad.png';
import CardItem from "../../components/Pages/Dashboard/CardItem";
import CardItemOverview from "../../components/Pages/Dashboard/CardItemOverview";
import OwnersTable from "../../components/Pages/Dashboard/OwnersTable";
import OwnersChart from "../../components/Pages/Dashboard/OwnersChart";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <Stack spacing={1.5}>
        <Stack className="title title-bottom-bar" direction={'row'} alignItems={'center'} spacing={1}>
          <img className="title-logo" src={ImageDashboardLogo} alt="" />
          <Typography className="big-title">
            DASHBOARD
          </Typography>
        </Stack>
        <Stack>
          <Box>
            <Grid container spacing={2.5}>
              <Grid item lg={6} xs={12}>
                <Stack spacing={3}>
                  <Box>
                    <Grid container spacing={2.5}>
                      <Grid item lg={5} md={5} sm={5} xs={12}>
                        <Stack spacing={3}>
                          <CardItem cardkey='Moonizens created' cardvalue='1,000' />
                          <CardItem cardkey='Owners' cardvalue='513' />
                          <CardItem cardkey='Unique Owners' cardvalue='45%' />
                        </Stack>
                      </Grid>
                      <Grid item lg={7} md={7} sm={7} xs={12}>
                        <CardItemOverview />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box>
                    <OwnersChart />
                  </Box>
                </Stack>
              </Grid>
              <Grid item lg={6} xs={12}>
                <OwnersTable />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </DashboardStyled>
  )
}

export default Dashboard;