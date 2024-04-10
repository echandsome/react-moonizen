import styled from "@emotion/styled";
import ImageBackground from '../assets/images/background.png'

const MainFrameStyled = styled.div`
background-image: url(${ImageBackground});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
min-height: 100vh;

.main-wrapper {
  .sidebar {
    height: calc(100vh - 60px);
    width: 213px;
  }
  .main-content {
    height: calc(100vh - 60px);
    width: calc(100% - 214px);
    padding: 0px 50px 50px 56px;
    overflow: auto;
  }
  .big-title {
    font-family: Space Ranger;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.36px;
    line-height: 32px;
    color: ${props => props.theme.palette.fontColor.secondary};
    text-transform: lowercase;
  }
  .small-title {
    font-family: Space Ranger;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.18px;
    line-height: normal;
    color: ${props => props.theme.palette.fontColor.third};
  }
  .title.title-bottom-bar {
    border-bottom: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #47C3C1, #7B3FE499, #7B3FE433);
    padding-bottom: 5px;
  }

  .description {
    color: ${props => props.theme.palette.fontColor.third};
    font-family: Space Ranger;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

@media (max-width: 767px) {
  .sidebar {
    position: fixed;
    z-index: 10;
    transition: all .5s;
    overflow: hidden;

    &.hide {
      width: 0px;
      transition: all .5s;
    }
  
    &.show {
      width: 213px;
      transition: all .5s;
    }
  }

  .main-wrapper {
    .main-content {
      width: 100%;
      padding: 0px 20px 20px 20px;
    }
  }
}
`;

export default MainFrameStyled;