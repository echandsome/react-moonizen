import styled from "@emotion/styled";

const TratisStyled = styled.div`
.traits-box {
  .title {
    p {
      color: ${props => props.theme.palette.fontColor.primary};
      font-family: Space Ranger;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.24px;
    }
  }

  .input-form {
    .input-form-item {
      border-radius: 4px;
      background: #000d14;
      background-blend-mode: multiply;

      input {
        height: 28px;
        padding: 10px;
        color: #FFF;
      }
    }
  }

  .tratis-content {
    .content {
      border-radius: 5px;
      background: rgba(7, 72, 91, 0.25);
      background-blend-mode: multiply;
      padding: 20px 20px 10px 20px;

      p {
        color: #FFF;
        font-family: Poppins;
        font-size: 13px;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.13px;
      }

      p.bold {
        font-weight: 700;
      }
      p.small {
        color: #FFF;
        font-family: Jura;
        font-size: 8px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        word-wrap: break-word;
      }
    }
  }
}
`;

export default TratisStyled;