
import React from 'react';
import { Paper, IconButton } from 'material-ui';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { ListItemSecondaryAction } from 'material-ui';
import { Delete } from '@material-ui/icons';


export default ({ styles, bookmarks, getBookmarksByCategory, onDelete }) => {
    return (
        <Paper   style={styles.Bookmarks}>
            <List component="ul">
                {bookmarks.map(bookmark => {
                    return (
                        <ListItem 
                            key={bookmark.id}
                            >
                            <ListItemText primary={bookmark.name} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => onDelete(bookmark.id)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        )
                    })
                }
            </List>
        </Paper>
    )
}