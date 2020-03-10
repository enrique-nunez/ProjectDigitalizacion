import React from "react";
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import { Button, Grid, InputLabel, Input, Box } from "@material-ui/core";
import { FormControl } from '@material-ui/core';
export class SedeForm extends React.Component {
    constructor(props) {
        super(props)
        const { sedeEdit } = props
        this.state = {
            sedeEdit: sedeEdit != null ? sedeEdit : { id: "", name: "", direction: "", telephone: "", departament: "", province: "", district: "", city: "", regime: "" }

        }
    }
    render() {
        const { sedeEdit } = this.state
        return (
            <React.Fragment>
                <Formik initialValues={sedeEdit} enableReinitialize={true} onSubmit={this.onSubmit}>

                    {
                        ({ values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting }) => (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Input name="id" id="my-input12" type="hidden" value={values.id} />
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input1">Nombre:</InputLabel>
                                                <Input onChange={handleChange} name="name" id="my-input1" value={values.name} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input2">Direccion :</InputLabel>
                                                <Input onChange={handleChange} name="direction" id="my-input2" value={values.direction} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input3">Telefono:</InputLabel>
                                                <Input onChange={handleChange} name="telephone" type="text" id="my-input3" value={values.telephone} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input4">Departamento:</InputLabel>
                                                <Input onChange={handleChange} name="departament" type="text" id="my-input4" value={values.departament} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input5">Provincia:</InputLabel>
                                                <Input onChange={handleChange} name="province" type="text" id="my-input5" value={values.province} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input6">Distrito:</InputLabel>
                                                <Input onChange={handleChange} name="district" type="text" id="my-input6" value={values.district} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input7">Ciudad:</InputLabel>
                                                <Input onChange={handleChange} name="city" type="text" id="my-input7" value={values.city} />
                                            </FormControl>
                                        </Grid>
                                        <Grid item={true} xs={12} lg={6}>
                                            <FormControl fullWidth={true}>
                                                <InputLabel htmlFor="my-input8">Regimen:</InputLabel>
                                                <Input onChange={handleChange} name="regime" type="text" id="my-input8" value={values.regime} />
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
        )
    }
}