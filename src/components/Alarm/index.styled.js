import styled from '@emotion/styled';

const AlarmStyled = styled.div`
  border-radius: 100%;

  .alarm-button {
    position: relative;
    padding: 5px;
    border-radius: 100%;
  }

  .alarm-badge {
    position: absolute;
    top: 8px;
    right: 8px;
    background: red;
    color: white;
    border-radius: 100%;
    padding: 4px 4px;
    font-size: 0.8rem;
  }
`;

export default AlarmStyled;