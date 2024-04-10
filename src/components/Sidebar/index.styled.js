import styled from '@emotion/styled';

const SidebarStyled = styled.div`
height: 100%;
width: 100%;

.sidebar-box {
  background: linear-gradient(135deg, rgba(7, 72, 91, 0.60) 0%, rgba(7, 72, 91, 0.20) 100%);
  border-radius: 0px 26px 26px 0px;
  width: 100%;
  height: 100%;
  &:before {
    padding-left: 0px;
  }

  .sidebar-box-content {
    padding: 60px 24px 50px 40px;
    height: 100%;

    .MuiTabs-indicator {
      display: none;
    }

    .menu-list {
      height: 100%;

      .menu-wrapper {
        width: 100%;

        .menu {
          width: 100%;
          
          .menu-item {
            border-radius: 4px;
            padding: 8px;
            width: 100%;
            flex-direction: row;
            display: flex;
            align-items: center;
            color: ${props => props.theme.palette.fontColor.primary};
            font-size: 14px;
            font-weight: 500;
            justify-content: left;
            min-height: unset;
    
            img {
              margin: 0px;
              padding-right: 24px;
            }

            &.selected {
              background: ${props => props.theme.palette.background.primary};
              background-blend-mode: multiply;
              color: ${props => props.theme.palette.fontColor.green};
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .sidebar-box {
    background: linear-gradient(135deg, rgba(7, 72, 91) 0%, rgba(7, 72, 91) 100%);
    border-radius: 0px 26px 26px 0px;
  }
}
`;

export default SidebarStyled;