import React from "react"
import { DocumentIdentityForm } from "../components/form/DocumentIdentityForm"
import Modal from '@material-ui/core/Modal';
import { Grid, Button, useTheme, Box } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from "../css/classapp";
import sendData from "../bus/sendData"
import DocumentIdentityList from "../components/down/DocumentIdentityList";
import Backdrop from '@material-ui/core/Backdrop';
class DocumentIdentity extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            open: false,
            documents: [{ id: 1, shortName: "lalala", fullName: "ksksks", limit: 2 }],
            documentEdit: null
        }
    }
    componentDidMount() {
        this.subscribeData = sendData.subscribe(data => {
            const { documents } = this.state
            data.id = Math.round(Math.random() + 9)
            documents.push(data)
            this.setState({ documents })
            console.log("data", data)
        })
    }
    componentWillUnmount() {
        this.subscribeData.unsubscribe()
    }
    newDocument = () => {
        this.setState({
            documentEdit: null
        })
        this.toggleModal();
    }
    toggleModal = () => {
        const { open } = this.state
        this.setState({
            open: !open
        });
    }

    handleEditDocument = (document) => () => {
        console.log("Edit documento", document)
        this.setState({
            documentEdit: document,
            open: true
        })
    }
    handleRemoveDocument = (document) => () => {
        console.log(document)
    }

    render() {
        const { open, documents, documentEdit } = this.state
        return (
            <React.Fragment>
                <Grid>
                    <Grid item xs={12} lg={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <Button className={this.props.classes.buttonMargin} color="secondary" variant="contained" component="span" onClick={this.newDocument}>Nuevo</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <DocumentIdentityList handleRemove={this.handleRemoveDocument} handleEdit={this.handleEditDocument} documents={documents} />
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
                    }}
                >
                    <div className={this.props.classes.modalBody}>
                        <h2 id="simple-modal-title">Configuracion de documentos</h2>
                        <div id="simple-modal-description">
                            <DocumentIdentityForm documentEdit={documentEdit}></DocumentIdentityForm>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>

        )

    }
}
DocumentIdentity.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DocumentIdentity);