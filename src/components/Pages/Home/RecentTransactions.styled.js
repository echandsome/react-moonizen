import styled from "@emotion/styled";

const RecentTransactionsStyled = styled.div`
.recent-transactions-box {
  .title {
    border-bottom: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #47C3C1, #7B3FE499, #7B3FE433);
    padding-bottom: 5px;

    p {
      color: ${props => props.theme.palette.fontColor.primary};
      font-family: Space Ranger;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .table-wrapper {
    border-radius: 2px;
    background: linear-gradient(225deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 92.71%);
    padding: 14px 19px 11px 19px;
    
    .table-content {
      padding: 10px 18px;
      border-radius: 8px;
      &:before {
        opacity: .5;
      }
    }
  }
  
  th p, td p {
    color: ${props => props.theme.palette.fontColor.third};
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .cell-content {
    background: ${props => props.theme.palette.background.darkgreen};
    height: 44px;
    display: flex;
    align-items: center;
    padding:  0px;
    width: 100%;
    p {
      width: 100%;
    }
  }

  .table-cell {
    border: none;
  }

  tr td, tr th {
    .cell-content {
      padding-left: 5px !important;
      padding-right: 5px !important;
    }
    &:first-child {
      .cell-content {
        padding-left: 0px !important;
      }
    }
    &:last-child {
      .cell-content {
        padding-right: 0px !important;
      }
    }
  }

  thead {
    .table-row {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 2;

      .table-cell {
        padding: 16px 10px 8px 10px !important;
        background: ${props => props.theme.palette.background.darkgreen};
      }
    }
  }

  .data-table {
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 2px;
      background: ${props => props.theme.palette.background.darkgreen};
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
      width: 6px;
      border-radius: 10px;
      background: rgba(71, 195, 193, 0.50);
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      width: 6px;
      border-radius: 10px;
      background: rgba(71, 195, 193, 0.50);
    }

    .table-row .table-cell {
      padding: 18px 0px 0px 0px;
    }

    .image {
      width: 36px;
      height: 32px;
      border-radius: 6px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
`;

export default RecentTransactionsStyled;