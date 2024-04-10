import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartStyled from "./Chart.styled";
import { Box } from "@mui/material";

const data = [
  {
    "date": "1",
    "value": 800,
    "amt": 2400
  },
  {
    "date": "2",
    "value": 3000,
    "amt": 2210
  },
  {
    "date": "3",
    "value": 2000,
    "amt": 2290
  },
  {
    "date": "4",
    "value": 2780,
    "amt": 2000
  },
  {
    "date": "5",
    "value": 1890,
    "amt": 2181
  },
  {
    "date": "6",
    "value": 2390,
    "amt": 2500
  },
  {
    "date": "7",
    "value": 3490,
    "amt": 2100
  }
]

const Chart = () => {
  return (
    <ChartStyled>
      <Box className="chart-box">
        <ResponsiveContainer height={220}>
          <AreaChart data={data} margin={{ top: 0, left: 0, bottom: 0, right: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7B3FE4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#7B3FE4" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            {/* <XAxis dataKey="date" /> */}
            {/* <YAxis /> */}
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </ChartStyled>
  )
}

export default Chart;