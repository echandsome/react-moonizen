import { useEffect, useState } from 'react';
import { Badge, Box, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import AlarmStyled from './index.styled';

const Alarm = (props) => {
  
  const [alarmCount, setAlarmCount] = useState(0);

  useEffect(() => {
    setAlarmCount(props.count);
  }, [props.count])

  return (
    <AlarmStyled>
      <Box className='alarm-box'>
        <IconButton
          className='alarm-button'
          aria-label='alarm'
          onClick={() => setAlarmCount(alarmCount + 1)}
        >
          <NotificationsIcon htmlColor='white' />
          {alarmCount > 0 && (
            <Badge
              className='alarm-badge'
              // badgeContent={alarmCount}
              overlap='circular'
            />
          )}
        </IconButton>
      </Box>
    </AlarmStyled>
  )
}

export default Alarm;


