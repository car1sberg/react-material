import React, { Fragment } from 'react';
import { Paper, Divider } from 'material-ui';
import { ListItemText } from 'material-ui/List';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary': {
          color: theme.palette.common.white,
        },
      },
    },
    primary: {},
  });

function categoryList({ styles, categories, getBookmarksByCategory, classes, category }) {
    return (
        <Paper style={styles.Categories}>
            <MenuList>
                {categories.map(item => {
                    return (
                        <Fragment key={item.id}>
                            <MenuItem 
                                className={classes.menuItem} 
                                onClick={() => getBookmarksByCategory(item.id)} >
                                <ListItemText 
                                    classes={{ primary: classes.primary }}
                                    inset 
                                    primary={item.name} />
                            </MenuItem>
                            <Divider />
                        </Fragment>
                    )}
                )}
            </MenuList>
        </Paper>
    )
}

categoryList.propTypes = {
    classes: PropTypes.object.isRequired,
    getBookmarksByCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  };  

export default withStyles(styles) (categoryList);