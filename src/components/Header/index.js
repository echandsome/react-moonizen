import { Box, Button, Link, Stack, useMediaQuery } from '@mui/material';
import ImageLogo from '../../assets/images/logo.png';
import HeaderStyled from './index.styled';
import Alarm from '../Alarm';
import SearchBar from '../SearchBar';
import Avatar from '../Avatar';
import { useTheme } from '@emotion/react';
import { Menu } from '@mui/icons-material';

const Header = ({ showSidebar, setShowSidebar }) => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeaderStyled>
      <Box className='header'>
        <Stack className='header-innter' direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box className='logos'>
            {
              isXS
                ? (
                  <Button className='sidebar-toogle' onClick={() => setShowSidebar(!showSidebar)}>
                    <Menu />
                  </Button>
                )
                : null
            }
            <Link href='#'>
              <img src={ImageLogo} alt='' />
            </Link>
          </Box>
          <Stack direction={'row'} spacing={1} justifyContent={'start'} alignItems={'center'}>
            <Alarm />
            {
              isXS ? null : <SearchBar />
            }
            <Avatar />
          </Stack>
        </Stack>
      </Box>
    </HeaderStyled>
  )
}

export default Header;