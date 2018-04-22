
import React, { Fragment, Component } from 'react';
import { Button, Dialog, TextField, Select } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';

const styles = theme => ({
    FormControl: {
        width: 500
    }
})


export default withStyles(styles) (class extends Component {
    state = {
        open: false,
        bookmark: {
            name: '',
            category: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            bookmark: {
                ...this.state.bookmark,
                [name]: event.target.value,
            }
        });
      };

    handleSubmit = () => {
        // TODO: validation
        const { bookmark } = this.state;
        this.props.onCreate({
            id: Date.now(),
            ...bookmark
        });

        this.setState({
            bookmark: {
                name: '',
                category: ''
            },
            open: false
        })
    }

    handleToggle = () => this.setState({ open: !this.state.open })


    render() {
        const { open, bookmark: { name, category } } = this.state;
        const { categories, classes } = this.props;

        return (
            <Fragment>
                <Button variant="fab" mini onClick={this.handleToggle}>
                    <AddIcon />
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                    >
                    <DialogTitle>Create a bookmark</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, fill out the form below
                        </DialogContentText>
                        <form>
                        <TextField
                            className={classes.FormControl}
                            label="Name"
                            value={name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            />
                        <br />
                        <FormControl>
                            <InputLabel htmlFor="category">Category</InputLabel>
                            <Select
                                className={classes.FormControl}
                                value={category}
                                onChange={this.handleChange('category')}>
                                {categories.map(item => 
                                    <MenuItem 
                                        key={item.id} 
                                        value={item.name}>
                                        {item.name}
                                    </MenuItem>)}
                            </Select>
                        </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={this.handleSubmit} 
                            color="primary" 
                            variant="raised">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
})