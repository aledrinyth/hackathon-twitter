import * as React from 'react';
import List from '@mui/material/List';
import Fab from '@mui/material/Fab';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Padding, PaddingOutlined } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

export default function LeftPanel() {
  return (
    <List sx={{ width: '100%', height: '100%' ,maxWidth: 450, maxHeight:600, paddingLeft:"5%" ,bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>  
          <Avatar>
            <Fab color='primary'>
                <HomeIcon />
            </Fab>
          </Avatar>
        </ListItemAvatar>
        <Fab variant="extended" color='primary'>
                <HomeIcon sx={{ mr: 1 }} />
                 Home
        </Fab>
        <ListItemText />
      </ListItem>
      <Padding></Padding>
      <Divider variant="inset" component="li" />
      <Padding></Padding>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Fab color='primary'>
                <AccountCircleIcon />
            </Fab>
          </Avatar>
        </ListItemAvatar>
        <Fab variant="extended" color='primary'>
                <AccountCircleIcon sx={{ mr: 1 }} />
                 Profile
        </Fab>
        <ListItemText />
      </ListItem>
      <Padding></Padding>
      <Divider variant="inset" component="li" />
      <Padding></Padding>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Fab color='primary'>
                <MoreHorizIcon />
            </Fab>
          </Avatar>
        </ListItemAvatar>
        <Fab variant="extended" color='primary'>
                <MoreHorizIcon sx={{ mr: 1 }} />
                 More
        </Fab>
        <ListItemText />
        <Padding></Padding>
      </ListItem>
    </List>
  );
}