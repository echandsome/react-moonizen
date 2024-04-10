import GradientBorderBox from "../../GradientBorderBox";
import CardItemOverviewStyled from "./CardItemOverview.styled";

import ImagePolygonMatic from '../../../assets/images/polygon-matic.png';
import ImageExport from '../../../assets/images/export.png';
import { Stack, Box, Typography } from "@mui/material";
import Chart from "./Chart";

const CardItemOverview = () => {
  return (
    <CardItemOverviewStyled>
      <GradientBorderBox className="card-item-overview-box">
        <Stack direction={'column'} justifyContent={'space-between'} sx={{ height: '100%' }}>
          <Box className="top">
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Box className="image">
                  <img src={ImagePolygonMatic} />
                </Box>
                <Box className="crypto-data">
                  <Typography className="name">Polygon</Typography>
                  <Typography className="value">MATIC</Typography>
                </Box>
              </Stack>
              <Stack direction={'column'} className="rasing-info" justifyContent={'end'} alignItems={'end'}>
                <Box className="image" >
                  <img src={ImageExport} />
                </Box>
                <Typography textAlign={'right'} className="rasing-value">% + 2.05</Typography>
              </Stack>
            </Stack>
          </Box>
          <Box className="chart">
            <Chart />
          </Box>
        </Stack>
      </GradientBorderBox>
    </CardItemOverviewStyled>
  )
}

export default CardItemOverview;