import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Textboxinput from './Textboxinput';
import Fab from '@mui/material/Fab';
import { Padding } from '@mui/icons-material';

export default function Tweet() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              Tweet
            </Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Whats on your mind? Tweet your mind out on the brand new twitter!!
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Stack direction="row" spacing={1}>
            <Textboxinput/>
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Fab variant="extended" size="medium" color="primary">
            Tweet
        </Fab>
        <Padding></Padding>
      </Box>
    </Box>
  );
}