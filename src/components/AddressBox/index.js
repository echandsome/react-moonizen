import { Button, Stack, Typography } from "@mui/material";
import AddressBoxStyled from "./index.styled";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GradientBorderBox from "../GradientBorderBox";

const AddressBox = ({ value }) => {
  
  return (
    <AddressBoxStyled>
      <GradientBorderBox className="address-box">
        <Stack direction={'row'} spacing={1 / 2} alignItems={'center'}>
          <Typography className="address">{value}</Typography>
          <Button>
            <ContentCopyIcon className="icon" htmlColor="#FFF" />
          </Button>
        </Stack>
      </GradientBorderBox>
    </AddressBoxStyled>
  )
}

export default AddressBox;