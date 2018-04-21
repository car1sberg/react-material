
import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';


export default props => 
    <AppBar position="static" color="default">
        <Toolbar>
        <Typography variant="title" color="inherit">
            Booky manager
        </Typography>
        </Toolbar>
    </AppBar>