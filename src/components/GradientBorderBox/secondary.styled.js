import styled from "@emotion/styled";

const GradientSecBorderBoxStyled = styled.div`
height: 100%;

.gradient-sec-border-box {
  position: relative;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 4px;
    background: linear-gradient(280deg, #47C3C1, #7B3FE433);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }
  
  .gradient-border-sec-box-content {
    height: 100%;
    position: relative;
    padding: 1px;
    z-index: 1;
  }
}
`;

export default GradientSecBorderBoxStyled;