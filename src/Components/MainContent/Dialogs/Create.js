
import React, { Fragment, Component } from 'react';
import { Button, Dialog, Icon } from 'material-ui';
import AddIcon from '@material-ui/icons/Add';
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';


export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () => this.setState({ open: !this.state.open })

    render() {
        const { open } = this.state;
        return (
            <Fragment>
                <Button variant="fab" mini onClick={this.handleToggle}>
                    <AddIcon />
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                    >
                    <DialogTitle id="form-dialog-title">Create a bookmark</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, fill out the form below
                        </DialogContentText>
                        <form>
    
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" variant="raised">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}