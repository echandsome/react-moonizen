import { Box } from '@mui/material';
import AvatarStyled from './index.styled';
import ImageAvatar from '../../assets/images/avatar.png'

const Avatar = (props) => {
  
  return (
    <AvatarStyled>
      <Box className='avatar-box'>
        <img src={ImageAvatar} alt='' />
      </Box>
    </AvatarStyled>
  )
}

export default Avatar;


