
import React from 'react';
import { Paper } from 'material-ui';


export default ({ styles, bookmarks }) => {
    return (
        bookmarks.map(bookmark => {
            return (
                <Paper 
                style={styles.Bookmarks} 
                key={bookmark.id}
                >
                {bookmark.name}
            </Paper>
            )
        })
    )
}