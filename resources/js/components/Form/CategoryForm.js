import React from "react"
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button, Grid, InputLabel, Input, Box } from "@material-ui/core";
import { FormControl } from '@material-ui/core';
import sendData from "../../bus/sendData";
export class CategoryForm extends React.Component {
    constructor(props) {
        super(props)
        const { categoryEdit } = props
        this.state = {
            categoryEdit: categoryEdit != null ? categoryEdit : { name: "", description: "" }

        }

    }
    onSubmit(values) {
        sendData.next(values)
    }
    render() {
        const { categoryEdit } = this.state
        return <React.Fragment>
            <Formik initialValues={categoryEdit} enableReinitialize={true} onSubmit={this.onSubmit}>
                {
                    ({ values, errors, touched, handleChange, handleBlur, handlesubmit, isSubmitting }) => (
                        <Form>
                            <Grid spacing={3} container={true}>
                                <Input name="id" type="hidden" value={values.id} />
                                <Grid item xs={12}>
                                    <FormControl fullWidth={true}>
                                        <InputLabel htmlFor="my-input1">Nombre :</InputLabel>
                                        <Input onChange={handleChange} name="name" id="my-input1" aria-describedby="my-helper-text" value={values.name} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth={true}>
                                        <InputLabel htmlFor="my-input2">Descripcion :</InputLabel>
                                        <Input onChange={handleChange} name="description" id="my-input2" multiline value={values.description} />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box display="flex" justifyContent="flex-start" alignItems="flex-end" >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={isSubmitting}
                                            type="submit"
                                        >
                                            Guardar
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )
                }
            </Formik>
        </React.Fragment>
    }

}