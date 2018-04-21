
import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';


export default ({ categories }) =>
    <Paper>
        <Tabs
            value={0}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
        {categories.map(category => 
            <Tab key={category.id} label={category.name} />
        )}
        </Tabs>
    </Paper>