import styled from "@emotion/styled";

const StatusStyled = styled.div`
.status-box {
  width: 100%;
  height: 327px;

  .status-box-inner {
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
    padding: 10px 35px 26px 35px;
    
    .title {
      color: ${props => props.theme.palette.fontColor.third};
      font-family: Space Ranger;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.24px;
    }

    .card-lines {
      width: 100%;
      height: 15px;
      margin-top: -5px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .status-content {
      height: 235px;
      
      textarea {
        width: 100%;
        height: 100%;
        padding: 15px;
        border: none;
        background: ${props => props.theme.palette.background.darkgreen};
        background-blend-mode: multiply;
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.32));
        resize: none;

        color: #FFF;
        font-family: Jura;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.15px;

        :focus {
          outline: none;
        }
      }
    }
  }
}

.btn-mint-wrapper {
  border-radius: 2px;
  padding: 3px;
}

.btn-mint {
  color: #FFF;
  height: 60px;
  width: 100%;
  font-family: Space Ranger;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.4px;

  &:not(.image-bg) {
    background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);    
  }
  &.image-bg {
    background-size: contain;
    background-repeat: round;
  }
}

.on-mint-button-group {
  padding-top: 5px;
  padding-bottom: 5px;

  .on-mint-btn-wrapper.big {
    display: block;
  }

  .on-mint-btn-wrapper {
    width: 100%;
    height: 100%;

    & > div {
      height: fit-content;
    }


    .on-mint-button-item.big {
      padding: 3px;
    }

    .on-mint-button-item.small {
      height: 54px;
  
      .btn-mint {
        height: 54px;
      }
    }
  }
}

@media (max-width: 1300px) {
  .btn-mint {
    min-width: 40px;
  }
}
`;

export default StatusStyled;