import styled from '@emotion/styled';

const SearchBarStyled = styled.div`
  display: flex;
  background: ${props => props.theme.palette.background.third};
  background-blend-mode: overlay;

  .gradient-border-box {
    border-radius: 4px;
  }

  &:focus-within: {
    width: 300px;
  }

  .search-input {
    display: none;
    box-sizing: border-box;
    padding-left: 15px;
    color: ${props => props.theme.palette.fontColor.primary};
  }

  .search-button {
    padding: 5px;
  }
`;

export default SearchBarStyled;