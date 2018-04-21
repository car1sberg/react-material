
import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';


export default ({ getAllBookmarks }) => 
    <AppBar position="static">
        <Toolbar>
        <Typography variant="title" color="inherit" onClick={getAllBookmarks}>
            Booky manager
        </Typography>
        </Toolbar>
    </AppBar>