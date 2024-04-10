import styled from "@emotion/styled";

const ClaimBoxStyled = styled.div`
.claim-box {
  padding: 30px 20px 30px 24px; 
  border-radius: 4px;

  .claim-box-content {
    position: relative;
    width: 100%;
    height: 270px;
    background: ${props => props.theme.palette.background.primary};
    border: 1px solid #000; 
    background-blend-mode: multiply;

    .image {
      width: 100%;
      height: calc(100% - 30px);
    }

    .claim-button-wrapper {
      position: absolute;
      width: fit-content;
      height: fit-content;
      left: 50%;
      bottom: -20px;
      transform: translate(-50%, 0px);
  
      .claim-button {
        border-radius: 10px;
        padding: 9px 58px;
        color: ${props => props.theme.palette.fontColor.primary};
        background: ${props => props.theme.palette.background.secondary};
        font-family: Space Ranger;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.32px;
        text-transform: lowercase !important;
      }
    }
  }
}
`;

export default ClaimBoxStyled;