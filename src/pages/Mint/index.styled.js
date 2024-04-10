import styled from "@emotion/styled";

const MintStyled = styled.div`
.mint-content {
  .image-wrapper {
    width: 439px;
    height: 439px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 1200px) {
  .mint-content .image-wrapper {
    width: 439px;
    height: 439px;
  }
}

@media (max-width: 991px) {
  .card-overlay {
    display: flex;
    justify-content: space-around;
    margin-bottom: -32px;
    margin-top: -32px;
  }
}

@media (max-width: 500px) {
  .mint-content .image-wrapper {
    width: 350px;
    height: 320px;
  }
}
`;

export default MintStyled;