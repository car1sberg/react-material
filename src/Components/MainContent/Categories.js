import React from 'react';
import { Paper } from 'material-ui';
import List, { ListItem, ListItemText } from 'material-ui/List';


export default ({ styles, categories }) => 
    <Paper style={styles.Categories}>
        <List component="nav">
            {categories.map(category => 
                <ListItem button key={category.id}>{category.name}
                    <ListItemText primary={category.name} />
                </ListItem>
        )}
        </List>
    </Paper>