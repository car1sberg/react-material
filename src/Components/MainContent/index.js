
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
        marginBottom: 10,
        minHeight: 213
    },
    Bookmarks: { 
        padding: 20, 
        marginTop: 10, 
        marginRight: 16,
        minHeight: 213

    }
}

export default ({ bookmarks, categories, getBookmarksByCategory, filteredBookmarks, category, onDelete }) => {
    return (
        <Grid container>
            <Grid item sm={6} xs={12}>
                <Categories 
                    styles={styles} 
                    category={category}
                    categories={categories} 
                    getBookmarksByCategory={getBookmarksByCategory} />
            </Grid>
            <Grid item sm={6} xs={12}>
                <Bookmarks 
                    styles={styles}
                    bookmarks={bookmarks}
                    onDelete={onDelete}
                    getBookmarksByCategory={getBookmarksByCategory}
                    />
            </Grid>
        </Grid>
    )
}