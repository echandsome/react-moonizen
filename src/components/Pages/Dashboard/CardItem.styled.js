import styled from "@emotion/styled";

const CardItemStyled = styled.div`
.card-item-box {
  padding: 20px;
  height: 100px;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);

  .card-item-content {
    height: 100%;

    .card-key {
      color: ${props => props.theme.palette.fontColor.third};
      font-family: Jura;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.13px;
    }
  
    .card-value {
      color: ${props => props.theme.palette.fontColor.primary};
      font-family: Jura;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.2px;
    }
  }
}
`;

export default CardItemStyled;