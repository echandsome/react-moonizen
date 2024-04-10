import styled from "@emotion/styled";

const CardItemOverviewStyled = styled.div`
.card-item-overview-box {
  border-radius: 2px;
  background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
  height: 348px;

  .top {
    padding: 20px 14px 20px 14px;
    .crypto-data {
      .name {
        color: ${props => props.theme.palette.fontColor.primary};
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.18px;
      }
      .value {
        color: ${props => props.theme.palette.fontColor.third};
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.14px;
      }
    }
    .rasing-info {
      .image {
        width: 24px;
        height: 24px;
      }
      .rasing-value {
        color: ${props => props.theme.palette.fontColor.third};
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
`;

export default CardItemOverviewStyled;