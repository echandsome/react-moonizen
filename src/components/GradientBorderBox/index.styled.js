import styled from "@emotion/styled";

const GradientBorderBoxStyled = styled.div`
height: 100%;

.gradient-border-box {
  position: relative;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(150deg, #47C3C1, #7B3FE4);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }
  
  .gradient-border-box-content {
    height: 100%;
    position: relative;
    padding: 1px;
    z-index: 1;
  }
}
`;

export default GradientBorderBoxStyled;