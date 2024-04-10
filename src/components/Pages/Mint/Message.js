import { Box, Typography } from "@mui/material";
import MessageStyled from "./Message.styled";
import ImageGrid from '../../../assets/images/mint-stas-grid.png';
import GradientBorderBox from "../../GradientBorderBox";

const Message = ({ mintStatus }) => {
  return (
    <MessageStyled>
      <GradientBorderBox className="message-box-wrapper">
        <Box className="message-box" sx={{ backgroundImage: `url(${ImageGrid})` }}>
          {
            mintStatus
              ? (
                <Box className="message-box-overlay">
                  <Typography className="message-content">
                    Select the number of Moonizens Genesis to Mint and begin the Mymbocar process.
                  </Typography>
                </Box>
              )
              : (
                null
              )
          }
        </Box>
      </GradientBorderBox>
    </MessageStyled>
  )
}

export default Message;