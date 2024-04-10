import styled from "@emotion/styled";

const GenesisAsideStyled = styled.div`
  padding-top: 28px;
  
  .title {
    padding-bottom: 8px !important;

    .genesis-title {
      color: ${props => props.theme.palette.fontColor.secondary};
      font-size: 20px;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.2px;
      font-family: Space Age;
    }
  }

  .content {
    padding-top: 70px;
    padding-left: 32px;

    .genesis-box {
      padding: 59px 32px;
      height: 556px;
      background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
      background-blend-mode: multiply;
      
      .genesis-wrapper {
        padding: 12px 20px;
        border-radius: 10px;
        max-width: 595px;
        margin: auto;
        background: #011c23;
      }
    }

    .genesis-right-wrapper {
      padding-top: 0;
    }
  }

  @media (max-width: 1365px) {
    .content .genesis-box {
      height: 500px;
    }
  }

  @media (max-width: 1200px) {
    .content .genesis-box {
      padding: 30px;
    }
  }

  @media (max-width: 1200px) {
    .gradient-border-box .bg-box {
      min-width: unset;
    }
  }

  @media (max-width: 991px) {
    .content .genesis-box {
      height: 800px;
    }
  }

  @media (max-width: 574px) {
    .content .genesis-box {
      height: 1220px;
    }
  }
`;

export default GenesisAsideStyled;