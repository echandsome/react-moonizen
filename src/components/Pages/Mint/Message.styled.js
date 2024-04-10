import styled from "@emotion/styled";

const MessageStyled = styled.div`
.message-box-wrapper {
  border-radius: 0px 20px;
  background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
  backdrop-filter: blur(10px);
  
  .message-box {
    width: 100%;
    height: 216px;
    padding: 23px 48px;
  
    .message-box-overlay {
      width: 100%;
      height: 100%;
      border-radius: 20px 0px;
      background: linear-gradient(180deg, rgb(0 0 0 / 20%) 0%, rgb(14 26 30 / 60%) 100%);
      background-blend-mode: multiply;
      padding: 40px 185px;
      display: flex;
      align-items: center;
  
      .message-content {
        color: #E6F4F1;
        text-align: center;
        font-family: Jura;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
}

@media (max-width: 1436px) {
  .message-box-wrapper .message-box .message-box-overlay {
    padding: 30px 100px;
  }
}

@media (max-width: 1200px) {
  .message-box-wrapper .message-box .message-box-overlay {
    .message-content {
      font-size: 24px;
    }
  }
}

@media (max-width: 991px) {
  .message-box-wrapper {
    margin-top: 30px;
    .message-box .message-box-overlay {
      padding: 30px;
      .message-content {
        font-size: 18px;
      }
    }
  }
}
`;

export default MessageStyled;