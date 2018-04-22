
import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';


export default ({ categories, getBookmarksByCategory, onSelect, category, getAllBookmarks }) => {
    const index = category 
        ? categories.findIndex(item => item === category) + 1
        : 0
    const selectedIndex = (e, index) => {
        onSelect(index === 0 ? '' : categories[index - 1]);
    }

    return (
        <Paper className="footer">
            <Tabs
                value={index}
                onChange={selectedIndex}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
            <Tab label="All" onClick={getAllBookmarks} />
            {categories.map(category => 
                <Tab 
                    key={category.id}
                    label={category.name}
                    onClick={() => getBookmarksByCategory(category.id)} />
            )}
            </Tabs>
        </Paper>
    )
}