import styled from "@emotion/styled";

const OwnersChartStyled = styled.div`
.owners-chart-box {
  border-radius: 10px;
  background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
  background-blend-mode: multiply;
  height: 296px;
  padding: 14px 36px 0px 36px;

  .title {
    margin: 0px;
    
    .bg-title {
      color: ${props => props.theme.palette.fontColor.primary};
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.2px;
    }
    .sm-title {
      color: ${props => props.theme.palette.fontColor.third};
      font-family: Poppins;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.13px;
    }
  }

  .chart-wrapper {
    margin-top: 10px;
    height: calc(100% - 82px);
    position: relative;

    .top-right-border {
      position: absolute;
      top: -34px;
      right: -37px;
    }

    .bottom-left-border {
      position: absolute;
      bottom: -12px;
      left: -36px;
    }

    .chart-wrapper-content {
      height: 100%;

      .chart-content {
        border-radius: 10px;
        background: ${props => props.theme.palette.background.darkgreen};
        background-blend-mode: multiply;
      }
    }
  }
  
  .box-footer {
    color: ${props => props.theme.palette.fontColor.third};
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
}
`;

export default OwnersChartStyled;