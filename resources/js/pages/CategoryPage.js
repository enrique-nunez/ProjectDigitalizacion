import React from "react"
import styles from "../css/classapp";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Grid, Box, Button } from "@material-ui/core";
import CategoryList from "../components/down/CategoryList";
import { CategoryForm } from "../components/form/CategoryForm"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

class CategoryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            categories: [{ id: 1, name: "lalala", description: "ksksks" }],
            categoryEdit: null
        }
    }
    handleRemove = (category) => () => {

    }
    handleEdit = (category) => () => {
        this.setState({
            categoryEdit: category,
            open: true
        })
    }
    newCategory = () => {
        this.setState({
            categoryEdit: null
        })
        this.toggleModal();
    }
    toggleModal = () => {
        const { open } = this.state
        this.setState({
            open: !open
        });
    }
    render() {
        const { open, categoryEdit } = this.state
        return (
            <React.Fragment>
                <Grid>
                    <Grid item xs={12} lg={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button className={this.props.classes.buttonMargin} color="secondary" variant="contained" component="span" onClick={this.newCategory}>Nuevo</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <CategoryList categories={[{ id: 1, code: "0001", name: "NUevo", description: "NANSNS" }]} handleRemove={this.handleRemove} handleEdit={this.handleEdit} />
                    </Grid>
                </Grid>
                <Modal open={open}
                    aria-labelledby="server-modal-title"
                    aria-describedby="server-modal-description"
                    onClose={this.toggleModal}
                    className={this.props.classes.modal}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}>
                    <div className={this.props.classes.modalBody}>
                        <h2 id="simple-modal-title">Categoria</h2>
                        <div id="simple-modal-description">
                            <CategoryForm categoryEdit={categoryEdit} />
                        </div>
                    </div>
                </Modal>
            </React.Fragment>

        );
    }
}
CategoryPage.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(CategoryPage);