import { Box, Stack } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Mint from "../pages/Mint";
import Dashboard from "../pages/Dashboard";
import MainFrameStyled from "./MainFrame.style";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import TabPanel from "../components/TabPanel";
import Collection from "../pages/Collection";

const MainFrame = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const onChangeSelectedPage = (page) => {
    setSelectedPage(page);
    setShowSidebar(false);
  }

  return (
    <MainFrameStyled>
      <Box>
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Stack className="main-wrapper" direction={'row'}>
          <Box className={`sidebar ${showSidebar ? 'show' : 'hide'}`}>
            <Sidebar selectedPage={selectedPage} setSelectedPage={onChangeSelectedPage} />
          </Box>
          <Box className="main-content">
            <SwipeableViews index={selectedPage} disabled>
              <TabPanel value={selectedPage} index={0} ><Home /></TabPanel>
              <TabPanel value={selectedPage} index={1}><Mint /></TabPanel>
              <TabPanel value={selectedPage} index={2}><Dashboard /></TabPanel>
              <TabPanel value={selectedPage} index={3}><Collection /></TabPanel>
            </SwipeableViews>
          </Box>
        </Stack>
      </Box>
    </MainFrameStyled>
  )
}

export default MainFrame;