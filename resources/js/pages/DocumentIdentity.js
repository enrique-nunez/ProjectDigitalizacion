import React from "react"
import { DocumentIdentityForm } from "../components/Form/DocumentIdentityForm"
import Modal from '@material-ui/core/Modal';
import { Grid, Button, useTheme } from "@material-ui/core";
import { useStyles } from "../css/app";
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from "../css/classapp";
import sendData from "../bus/sendData"
class DocumentIdentity extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            open: false
        }
    }
    componentDidMount() {
        sendData.subscribe(data => {
            console.log("data", data)
        })
    }
    toggleModal = () => {
        const { open } = this.state
        this.setState({
            open: !open
        });
    }

    render() {
        const { open } = this.state
        return (
            <React.Fragment>
                <Grid>
                    <Grid item xs={12} lg={4}>
                        <Button onClick={this.toggleModal}>Nuevo</Button>
                    </Grid>
                    <Grid item xs={12}>
                        ACA ES LA LISTA DE IDENTITY
                </Grid>
                </Grid>
                <Modal open={open}
                    aria-labelledby="server-modal-title"
                    aria-describedby="server-modal-description"
                    onClose={this.toggleModal}
                    className={this.props.classes.modal}
                >
                    <div className={this.props.classes.modalBody}>
                        <h2 id="simple-modal-title">Configuracion de documentos</h2>
                        <div id="simple-modal-description">
                            <DocumentIdentityForm></DocumentIdentityForm>
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