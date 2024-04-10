import styled from "@emotion/styled";

const AddressBoxStyled = styled.div`
.address-box {
  padding: 6px;
  border-radius: 5px;
  background: ${props => props.theme.palette.background.primary};
  height: fit-content !important;

  .address {
    color: ${props => props.theme.palette.fontColor.third};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.12px;
  }
  button {
    padding: 0px;
    min-width: 0px;

    .icon {
      width: 12px;
      height: 12px;
    }
  }
}
`;

export default AddressBoxStyled;