import { Box, Stack, Typography } from "@mui/material";
import QuadrocarStyled from "./Quadrocar.styled";

import ImageQuadrocar1 from '../../../assets/images/quadrocar-1.png';
import ImageQuadrocar2 from '../../../assets/images/quadrocar-2.png';
import ImageQuadrocar3 from '../../../assets/images/quadrocar-3.png';
import ImageQuadrocar4 from '../../../assets/images/quadrocar-4.png';

const images = [
  ImageQuadrocar1,
  ImageQuadrocar2,
  ImageQuadrocar3,
  ImageQuadrocar4,
];

const Quadrocar = () => {
  return (
    <QuadrocarStyled>
      <Stack className="quadrocar-box" direction={'column'} justifyContent={'space-between'}>
        <Typography className="title">Quadrocar</Typography>
        <Stack className="quadrocar-items" direction={'row'} justifyContent={'space-between'}>
          {
            images.map((item, index) => {
              return (
                <Box key={index} className="quadrocar-item">
                  <img src={item} alt="" />
                </Box>
              )
            })
          }
        </Stack>
      </Stack>
    </QuadrocarStyled>
  )
}

export default Quadrocar;