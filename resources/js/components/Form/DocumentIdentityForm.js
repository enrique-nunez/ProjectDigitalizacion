import React from "react"
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Grid, InputLabel, Input, FormHelperText } from "@material-ui/core";
import { FormControl } from '@material-ui/core';
import SendData from "../../bus/sendData"
import documentIndetityService from "../../services/DocumentIdentityService";
export class DocumentIdentityForm extends React.Component {
    constructor(props) {
        super(props)
    }

    onSubmit = async (data) => {
        console.log(data)
        let documentIdentityCreate = (await documentIndetityService.create(data)).data
        SendData.next(documentIdentityCreate)
    }
    render() {
        return (<React.Fragment>
            <Formik initialValues={{
                shortName: "",
                limit: "",
                fullName: "",
                id: ""
            }} onSubmit={this.onSubmit}>
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (

                        <Form>
                            <Grid container spacing={2}>
                                <Input name="id" id="my-input12" type="hidden" value={values.shortName} />
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    type="submit"
                                >
                                    Guardar
                         </Button>
                            </Grid>
                        </Form>


                    )
                }
            </Formik>
        </React.Fragment >)

    }
}