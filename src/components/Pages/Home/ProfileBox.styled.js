import styled from "@emotion/styled";

const ProfileBoxStyled = styled.div`
.profile-box {
  border-radius: 4px;
  .profile-info {
    padding-left: 38px;
    padding-top: 22px;
    padding-bottom: 50px;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);

    .image {
      width: 137px;
      height: 137px;
      border-radius: 100%;
      border: 2px solid #47C3C1;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      position: absolute;
      top: 36px;
      right: 19px;

      .rank {
        color: ${props => props.theme.palette.fontColor.third};
        font-family: Space Ranger;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.15px;
        text-align: right;
      }
      .value {
        color: ${props => props.theme.palette.fontColor.secondary};
        text-align: right;
        font-family: Space Ranger;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.3px;
      }
    }
  }
  .balance {
    border-radius: 0px 0px 4px 4px;
    background: ${props => props.theme.palette.background.secondary};
    padding: 16px 18px 39px 16px;

    .desc {
      color: ${props => props.theme.palette.fontColor.third};
      font-family: Poppins;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.13px;
    }
    .value {
      color: ${props => props.theme.palette.fontColor.secondary};
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.2px;
    }
  }
}
`;

export default ProfileBoxStyled;