import React from "react"
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Grid, InputLabel, Input, Box } from "@material-ui/core";
import { FormControl } from '@material-ui/core';
import SendData from "../../bus/sendData";
import documentIndetityService from "../../services/DocumentIdentityService";
export class DocumentIdentityForm extends React.Component {
    constructor(props) {
        super(props)
        const { documentEdit } = props
        this.state = {
            documentEdit: documentEdit != null ? documentEdit : { shortName: "", limit: "", fullName: "", id: 0 }

        }

    }
    onSubmit = async (document) => {
        let documentData;
        if (document.id && document.id > 0) {
            (await documentIndetityService.update(document, document.id)).data
            documentData = document
        } else {

            documentData = (await documentIndetityService.create(document)).data
        }
        SendData.next(documentData)
    }
    isEdit() {
        const { documentEdit } = this.state
        return Object.values(documentEdit).some(property => property == "");

    }
    render() {
        const { documentEdit } = this.state
        return (<React.Fragment>
            <Formik initialValues={documentEdit} enableReinitialize={true} onSubmit={this.onSubmit}>
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (

                        <Form>
                            <Grid container spacing={2}>
                                <Input name="id" id="my-input12" type="hidden" value={values.id} />
                                <Grid item={true} xs={12} lg={6}>
                                    <FormControl fullWidth={true}>
                                        <InputLabel htmlFor="my-input1">Nombre corto:</InputLabel>
                                        <Input onChange={handleChange} name="shortName" id="my-input1" aria-describedby="my-helper-text" value={values.shortName} />
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12} lg={6}>
                                    <FormControl fullWidth={true}>
                                        <InputLabel htmlFor="my-input2">Nombre completo:</InputLabel>
                                        <Input onChange={handleChange} name="fullName" id="my-input2" aria-describedby="my-helper-text" value={values.fullName} />
                                    </FormControl>
                                </Grid>
                                <Grid item={true} xs={12} lg={6}>
                                    <FormControl fullWidth={true}>
                                        <InputLabel htmlFor="my-input3">Limite:</InputLabel>
                                        <Input onChange={handleChange} name="limit" type="number" id="my-input3" aria-describedby="my-helper-text" value={values.limit} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Box display="flex" justifyContent="flex-end" alignItems="flex-end" >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={isSubmitting}
                                            type="submit"
                                        >
                                            {this.isEdit() ? 'Guardar' : 'Editar'}
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>


                    )
                }
            </Formik>
        </React.Fragment >)

    }
}