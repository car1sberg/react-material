
import React from 'react';
import { Grid } from 'material-ui';
import Categories from './Categories';
import Bookmarks from './Bookmarks';

const styles = {
    Categories: { 
        padding: 20, 
        marginLeft: 16,  
        marginTop: 10, 
        marginRight: 16,
        marginBottom: 10
    },
    Bookmarks: { padding: 20, marginTop: 10, marginBottom: 10, marginRight: 16 }
}

export default ({ bookmarks, categories }) => {
    return (
        <Grid container>
            <Grid item sm>
                <Categories styles={styles} categories={categories} />
            </Grid>
            <Grid item sm>
                <Bookmarks styles={styles} bookmarks={bookmarks} />
            </Grid>
        </Grid>
    )
}