import styled from "@emotion/styled";

const FilterResultBoxStyled = styled.div`
  margin-top: 24px;
  background: linear-gradient(180deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
  background-blend-mode: multiply;
  height: 535px;

  .filter-result-box {
    height: 100%;
    border-radius: 4px;
    padding: 19px 9px 19px 18px;
    
    .filter-wrapper {
      overflow-y: scroll;
      height: 100%;

      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background: rgba(0,0,0,.4);
        border-radius: 2px;
      }
      
      &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #47C3C1;
        background-blend-mode: multiply;
      }

      .link {
        color: ${props => props.theme.palette.fontColor.secondary};
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: unset;
        display: block;
      }
    }
  }

  @media (max-width: 574px) {
    height: 478px;
  }
`;

export default FilterResultBoxStyled;