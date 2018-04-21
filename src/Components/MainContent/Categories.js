import React from 'react';
import { Paper } from 'material-ui';
import List, { ListItem, ListItemText } from 'material-ui/List';


export default ({ styles, categories, getBookmarksByCategory }) => 
    <Paper style={styles.Categories}>
        <List component="ul">
            {categories.map(category => 
                <ListItem 
                    button 
                    key={category.id}
                    onClick={() => getBookmarksByCategory(category.id)}>
                    <ListItemText primary={category.name} />
                </ListItem>
        )}
        </List>
    </Paper>