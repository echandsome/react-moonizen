import styled from "@emotion/styled";

const GenesisAvatarStyled = styled.div`
  .gradient-border-box {
    border-radius: 5px;
    width: 100%;
    height: 110px;

    .bg-box {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  @media (max-width: 1365px) {
    .gradient-border-box {
      height: 88px;
    }
  }

  @media (max-width: 991px) {
    .gradient-border-box {
      height: 125px;
    }
  }
`;

export default GenesisAvatarStyled;