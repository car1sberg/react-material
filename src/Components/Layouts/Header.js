
import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import CreateDialog from '../MainContent/Dialogs/Create';


export default ({ getAllBookmarks }) => 
    <AppBar position="static">
        <Toolbar>
        <Typography 
            className="Logo"
            variant="title"
            color="inherit"
            onClick={getAllBookmarks}>
            Booky manager
        </Typography>
        <CreateDialog />
        </Toolbar>
    </AppBar>