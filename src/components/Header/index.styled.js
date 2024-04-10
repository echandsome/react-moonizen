import styled from "@emotion/styled";

const HeaderStyled = styled.div`
  .header {
    height: 60px;
    background: linear-gradient(360deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);

    .header-innter {
      height: 100%;
      padding-left: 30px;
      padding-right: 45px;
    }
  }

  @media (max-width: 767px) {
    .sidebar-toogle {
      color: #FFF;
      width: 30px;
      height: 30px;
      margin: 0px;
      padding: 0px;
      min-width: unset;
      min-height: unset;
      margin-right: 20px;
    }

    .header {
      .header-innter {
        padding-left: 15px;
        padding-right: 15px;

        .logos {
          display: flex;
          align-items: center;
          margin-right: 20px;

          img {
            width: 100px;
          }
        }
      }
    }
  }
`;

export default HeaderStyled;