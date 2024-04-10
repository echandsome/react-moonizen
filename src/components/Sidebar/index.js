import { Box, Button, Stack, Tab, Tabs } from "@mui/material";
import SidebarStyled from "./index.styled";

import ImageHome from '../../assets/images/home.png';
import ImageMint from '../../assets/images/mint.png';
import ImageDashboard from '../../assets/images/dashboad.png';
import ImageCollection from '../../assets/images/collection.png';
import ImageMedia from '../../assets/images/media.png';
import ImageWallet from '../../assets/images/wallet.png';
import ImageSettings from '../../assets/images/settings.png';
import ImageExit from '../../assets/images/exit.png';
import GradientBorderBox from "../GradientBorderBox";


const menuList1 = [
  { icons: [ImageHome, ImageHome], value: 0, label: 'Home' },
  { icons: [ImageMint, ImageMint], value: 1, label: 'Mint' },
  { icons: [ImageDashboard, ImageDashboard], value: 2, label: 'Dashboard' },
  { icons: [ImageCollection, ImageCollection], value: 3, label: 'Collection' },
  { icons: [ImageMedia, ImageMedia], value: 4, label: 'Media' },
]

const menuList2 = [
  { icon: ImageWallet, value: 5, label: 'Wallet' },
  { icon: ImageSettings, value: 6, label: 'Settings' },
]

const menuList3 = [
  { icon: ImageExit, value: 7, label: 'Exit' },
]

const Sidebar = ({ selectedPage, setSelectedPage }) => {

  return (
    <SidebarStyled>
      <GradientBorderBox className="sidebar-box">
        <Box className="sidebar-box-content">
          <Stack className="menu-list" direction={'column'} alignItems={'start'} justifyContent={'space-between'}>
            <Stack className="menu-wrapper">
              <Tabs className="menu" value={selectedPage} orientation="vertical" onChange={(e, value) => { setSelectedPage(value) }}>
                {
                  menuList1.map((item, index) => {
                    const icon = item.value === selectedPage
                      ? <img src={item.icons[1]} alt='' />
                      : <img src={item.icons[0]} alt='' />
                    return (
                      <Tab
                        key={index}
                        value={item.value}
                        label={item.label}
                        icon={icon}
                        className={`menu-item ${item.value === selectedPage ? 'selected gradient-border-box' : ''}`}
                      />
                    )
                  })
                }
              </Tabs>
            </Stack>
            <Stack className="menu-wrapper">
              <Box className="menu" value={selectedPage} orientation="vertical" onChange={(e, value) => { setSelectedPage(value) }}>
                {
                  menuList2.map((item, index) => {
                    return (
                      <Button key={index} className="menu-item">
                        <img src={item.icon} alt="" />
                        {item.label}
                      </Button>
                    )
                  })
                }
              </Box>
            </Stack>
            <Stack className="menu-wrapper">
              <Box className="menu">
                {
                  menuList3.map((item, index) => {
                    return (
                      <Button key={index} className="menu-item">
                        <img src={item.icon} alt="" />
                        {item.label}
                      </Button>
                    )
                  })
                }
              </Box>
            </Stack>
          </Stack>
        </Box>
      </GradientBorderBox>
    </SidebarStyled>
  )
}

export default Sidebar;