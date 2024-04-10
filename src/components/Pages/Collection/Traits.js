import { Box, Grid, InputBase, Stack, Typography } from "@mui/material";
import TratisStyled from "./Traits.styled";
import GradientBorderBox from "../../GradientBorderBox";

const Traits = () => {
  return (
    <TratisStyled>
      <Stack className="traits-box" spacing={1.5}>
        <Box className="title">
          <Typography>Traits</Typography>
        </Box>
        <Box className="tratis-content">
          <Grid container spacing={2}>
            <Grid item lg={8} md={8} sm={12}>
              <Box className="input-form">
                <Grid container spacing={3}>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                  <Grid item lg={4} md={4} sm={4} xs={12}><GradientBorderBox className="input-form-item"><InputBase /></GradientBorderBox></Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <GradientBorderBox className="content">
                <Typography className="bold">Creator Earnings: 10%</Typography>
                {/* <Typography className="bold">10%</Typography> */}
                <Typography>Token Standard: ERC-721</Typography>
                {/* <Typography>ERC-721</Typography> */}
                <Typography mt={1}>Chain: Polygon</Typography>
                {/* <Typography>Polygon</Typography> */}
                <Typography mt={2} className="small">0xc4e051863a646395b8503fb42dd1583398114454</Typography>
              </GradientBorderBox>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </TratisStyled>
  )
}

export default Traits;