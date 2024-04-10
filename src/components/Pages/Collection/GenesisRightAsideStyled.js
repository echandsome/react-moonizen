import styled from "@emotion/styled";
import ImageRightAside from "../../../assets/images/rightaside.png";

const GenesisRightAsideStyled = styled.div`
  height: 100%;
  
  .gradient-border-box {
    border-radius: 13px;
    padding: 2px 0;

    .genesis-right-box {
      border-radius: 13px;
      background-image: url(${ImageRightAside});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 100%;
    }
  }
`;

export default GenesisRightAsideStyled;