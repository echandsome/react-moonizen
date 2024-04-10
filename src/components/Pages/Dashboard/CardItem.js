import CardItemStyled from "./CardItem.styled";
import GradientBorderBox from "../../GradientBorderBox";
import { Stack, Typography } from "@mui/material";

const CardItem = ({ cardkey, cardvalue }) => {
  return (
    <CardItemStyled>
      <GradientBorderBox className="card-item-box">
        <Stack direction={'column'} justifyContent={'space-between'} className="card-item-content">
          <Typography className="card-key">{cardkey}</Typography>
          <Typography className="card-value">{cardvalue}</Typography>
        </Stack>
      </GradientBorderBox>
    </CardItemStyled>
  )
}

export default CardItem;