import styled from "@emotion/styled";

const OwnersTableStyled = styled.div`
.owners-table-box {
  border-radius: 2px;
  background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
  height: 668px;

  .title {
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

  .box-content {
    height: calc(100% - 66px);

    .table-wrapper {
      position: relative;
      z-index: 2;
      height: 100%;
      padding-left: 37px;
      padding-right: 37px;

      .table-wrapper-content {
        border-radius: 10px;
        background: ${props => props.theme.palette.background.darkgreen};
        height: 537px;

        .top-right-border {
          position: absolute;
          top: -34px;
          right: -37px;
        }
  
        .bottom-left-border {
          position: absolute;
          bottom: -30px;
          left: -36px;
        }

        .table-main-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;

          .table-top {
            padding: 10px 20px 10px;

            .image {
              width: 38px;
              height: 38px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .table-title {
              color: ${props => props.theme.palette.fontColor.primary};
              font-family: Space Age;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.2px;
            }
          }

          .table-data {
            table {
              th {
                padding: 0px 10px 7px 10px;
              }

              td {
                padding: 5px 10px;
              }

              th, td {
                border-bottom: 1px solid rgba(149, 177, 175, 0.50);
              }

              td p, th p {
                color: ${props => props.theme.palette.fontColor.third};
                text-align: center;
                font-family: Poppins;
                font-size: 10px !important;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                letter-spacing: 0.1px;
              }

              .image {
                width: 28px;
                min-width: 28px;
                height: 28px;
                min-height: 28px;
                border-radius: 100%;
                box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.32);
                overflow: hidden;
                margin-right: 4px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }

    .table-pagination {
      ul li {
        button {
          position: relative;
          color: ${props => props.theme.palette.fontColor.third};
          text-align: center;
          font-family: Poppins;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          width: 24px;
          height: 24px;
          border-radius: 4px;
          background: ${props => props.theme.palette.background.darkgreen};
          padding: 0px;
          min-width: unset;

          &:before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1px;
            background: linear-gradient(150deg, #47C3C1, #7B3FE4);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .owners-table-box .box-content .table-wrapper .table-wrapper-content .table-main-content .table-top {
    padding: 5px;
  }
  .owners-table-box .box-content .table-wrapper .table-wrapper-content .table-main-content .table-top .image {
    width: 28px;
    height: 28px;
  }
  .owners-table-box .box-content .table-wrapper .table-wrapper-content .table-main-content .table-top .table-title {
    font-size: 16px;
  }
}
`;

export default OwnersTableStyled;