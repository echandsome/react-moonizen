import { Box, Stack, Grid, Typography } from "@mui/material";
import CollectionStyled from "./index.styled";
import FilterAside from "../../components/Pages/Collection/FilterAside";
import GenesisAside from "../../components/Pages/Collection/GenesisAside";

const Collection = () => {
  return (
    <CollectionStyled>
      <Stack>
        <Stack className="title title-bottom-bar" direction={'column'} spacing={0.5}>
          <Typography className="big-title">
            Collections
          </Typography>
          <Typography className="description">
            Welcome back, Moonizen
          </Typography>
        </Stack>
        {/* <Stack className="content" spacing={3.5}> */}
        <Box>
          <Grid container spacing={4}>
            <Grid item lg={3} xs={12}>
              <FilterAside />
            </Grid>
            <Grid item lg={9} xs={12}>
              <GenesisAside />
            </Grid>
          </Grid>
        </Box>
        {/* </Stack> */}
      </Stack>
    </CollectionStyled>
  )
}

export default Collection;