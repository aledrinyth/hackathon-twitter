import * as React from 'react';
import List from '@mui/material/List';
import Fab from '@mui/material/Fab';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import HomeIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function LeftPanel() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>  
          <Avatar>
            <Fab color='primary'>
                <HomeIcon />
            </Fab>
          </Avatar>
        </ListItemAvatar>
        <Fab variant="extended">
                <HomeIcon sx={{ mr: 1 }} />
                 Home
            </Fab>
        <ListItemText primary="Home"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
}