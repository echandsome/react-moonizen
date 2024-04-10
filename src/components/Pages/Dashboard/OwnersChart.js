import { Box, Typography } from "@mui/material";
import GradientBorderBox from "../../GradientBorderBox";
import OwnersChartStyled from "./OwnersChart.styled";

import ImageChartTopRightBorder from '../../../assets/images/owners-chart-tr-border.png';
import ImageChartBottomLeftBorder from '../../../assets/images/owners-chart-bl-border.png';
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

const Chartdata = [
  {
    name: '1',
    value: 40,
  },
  {
    name: '2-3',
    value: 32,
  },
  {
    name: '4-5',
    value: 23,
  },
  {
    name: '5-9',
    value: 17,
  },
  {
    name: '10-49',
    value: 9,
  },
  {
    name: '59-99',
    value: 8,
  },
  {
    name: '100-500',
    value: 7,
  },
  {
    name: '500-999',
    value: 3,
  },
];

const OwnersChart = () => {
  return (
    <OwnersChartStyled>
      <GradientBorderBox className="owners-chart-box">
        <Box className="title" mt={1} ml={5}>
          <Typography className="bg-title">513 Owners</Typography>
          <Typography className="sm-title">Own 1 or more</Typography>
        </Box>
        <Box className="chart-wrapper">
          <img className="top-right-border" src={ImageChartTopRightBorder} alt="" />
          <img className="bottom-left-border" src={ImageChartBottomLeftBorder} alt="" />
          <Box className="chart-wrapper-content">
            <GradientBorderBox className="chart-content">
              <ResponsiveContainer sx={{ width: '100%', height: '100%' }}>
                <BarChart width={150} height={40} data={Chartdata} margin={{ top: 50, bottom: 0, right: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="ownersColorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#459db1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#080526" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <Bar
                    barSize={36}
                    radius={6}
                    dataKey="value"
                    fill="url(#ownersColorValue)"
                    label={{ position: 'top', offset: 10, fill: '#47C3C1' }}
                  />
                  <XAxis dataKey="name" axisLine={false} dy={1} tickLine={false} tick={{ fontSize: '8px', fill: '#95B1AF' }} />
                </BarChart>
              </ResponsiveContainer>
            </GradientBorderBox>
          </Box>
          <Box>
            <Typography textAlign={'center'} className="box-footer">Moonizens Created</Typography>
          </Box>
        </Box>
      </GradientBorderBox>
    </OwnersChartStyled >
  )
}

export default OwnersChart;