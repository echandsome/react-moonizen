import styled from "@emotion/styled";

const CollectionViewStyled = styled.div`
.modal-inner-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 862px;
  height: 90vh;
  overflow: auto;

  .modal-inner {
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(4, 48, 61, 1) 0%, rgba(3, 31, 39, 1) 100%);

    .modal-content {
      padding: 51px 38px 44px 38px;
      
      .top-header-box {
        padding: 10px 0px 20px 38px;
        background: ${props => props.theme.palette.background.darkgreen};
        border-radius: 10px;
    
        .image {
          width: 290px;
          height: 290px;
    
          img {
            width: 100%;
            height: 100%;
          }
        }
    
        .top-header-desc {
          p {
            color: #FFF;
            font-family: Poppins;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            font-size: 13px;
            letter-spacing: 0.13px;
          }
    
          .bg-title {
            font-size: 32px;
            letter-spacing: 0.32px;
            font-weight: 700;
          }
    
          .sm-title {
            font-size: 24px;
            font-weight: 700;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .modal-inner-wrapper {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .top-box {
    display: block;

    .image {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .modal-inner-wrapper .modal-inner .modal-content .top-header-box {
    padding: 10px;
  }

  .modal-inner-wrapper .modal-inner .modal-content .top-header-box .top-header-desc {
    margin-left: 0px;
    margin-top: 20px;
  }

  .modal-inner-wrapper .modal-inner .modal-content .top-header-box .top-header-desc .bg-title {
    font-size: 22px;
  }
  .modal-inner-wrapper .modal-inner .modal-content .top-header-box .top-header-desc .sm-title {
    font-size: 20px;
  }
}

@media (max-width: 574px) {
  .modal-inner-wrapper .modal-inner .modal-content .top-header-box .image {
    width: 220px;
    height: 220px;
  }
}
`;

export default CollectionViewStyled;