import styled from "@emotion/styled";

const MoonizensOwnedStyled = styled.div`
height: 100%;
padding-top: 6px;
padding-bottom: 10px;

.moonizens-owned-box {
  height: 100%;

  .icon {
    margin-left: 8px;
  }
  .value {
    margin-left: 20px;
    color: ${props => props.theme.palette.fontColor.primary};
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.2px;
  }
  .desc {
    margin-left: 20px;
    color: ${props => props.theme.palette.fontColor.third};
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
`;

export default MoonizensOwnedStyled;