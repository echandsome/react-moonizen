import styled from "@emotion/styled";

const HomeStyled = styled.div`
padding-top: 8px;
.owned-box {
  .owned-box-item {
    height: 135px;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
  }
}

@media (max-width: 1199px) {
  .owned-box, .recent-transactions-box {
    margin-top: 20px;
  }
}

@media (max-width: 574px) {
  .owned-box .owned-box-item.quadrocar {
    height: fit-content;
  }
}
`;

export default HomeStyled;