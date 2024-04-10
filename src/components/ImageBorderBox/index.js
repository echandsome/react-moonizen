import { Box } from "@mui/material";
import ImageBorderBoxStyled from "./index.styled";

const ImageBorderBox = ({ image, ...props }) => {
  
  return (
    <ImageBorderBoxStyled>
      <Box {...props} className={`image-border-box ${props.className ? props.className : ''}`}>
        <img className="image" src={image} alt="" />
        <Box className="image-border-box-content">
          {props.children}
        </Box>
      </Box>
    </ImageBorderBoxStyled>
  )
}

export default ImageBorderBox;