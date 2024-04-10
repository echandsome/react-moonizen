import styled from "@emotion/styled";

const QuadrocarStyled = styled.div`
padding: 6px 28px 22px 28px;
height: 100%;

.quadrocar-box {
  height: 100%;

  .title {
    color: ${props => props.theme.palette.fontColor.primary};
    font-family: Space Ranger;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.2px;
  }
  .quadrocar-items {
    .quadrocar-item {
      width: 75px;
      height: 75px;
      border-radius: 20px;
      overflow: hidden;
      border: 3px solid #47C3C1;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 574px) {
  height: fit-content;

  .quadrocar-box {
    height: fit-content;
    .quadrocar-items {
      height: fit-content;
      flex-wrap: wrap;

      .quadrocar-item {
        margin-top: 10px;
        flex: 0 0 auto;
      }
    }
  } 
}
`;

export default QuadrocarStyled;