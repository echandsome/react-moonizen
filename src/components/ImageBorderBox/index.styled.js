import styled from "@emotion/styled";

const ImageBorderBoxStyled = styled.div`
height: 100%;

.image-border-box {
  position: relative;
  height: 100%;

  .image {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  
  .image-border-box-content {
    height: 100%;
    // position: relative;
    padding: 5px;
    z-index: 0;
  }
}
`;

export default ImageBorderBoxStyled;