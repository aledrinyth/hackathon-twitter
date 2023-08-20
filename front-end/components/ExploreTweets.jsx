import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Messages from './Messages';
import Box from '@mui/material/Box';

export default function ExploreTweets() {
  return (
    <Box
          sx={{
              width: 300,
              height: 300,
              backgroundColor: 'primary.dark',
              '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
              },
          }} >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={<IconButton aria-label="comment">
                        <CommentIcon />
                    </IconButton>}
                 >
                    <ListItemText primary="Explore tweet" />
                </ListItem>
            ))}
        </List>
        <Messages/>        
  </Box>
  );
}