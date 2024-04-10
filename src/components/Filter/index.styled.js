import styled from "@emotion/styled";

const FilterStyled = styled.div`
  padding-top: 43px;

  .filter {
    position: relative;

    .title {
      color: ${props => props.theme.palette.fontColor.secondary};
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.18px;
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 2px;
      padding-left: 4px;
    }
  
    .collection-filter > div {
      width: 100%;
    }
  
    input[type="text"] {
      color: ${props => props.theme.palette.fontColor.third};
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.12px;
      padding-top: 12px;
      padding-bottom: 12px;
      width: 100%;
    }

    .search-icon {
      position: absolute;
      right: 25px;
      bottom: 10px;
    }
  }
`;

export default FilterStyled;