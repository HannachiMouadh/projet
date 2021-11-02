import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Depart = ({ formData, setForm, navigation }) => {
    const { depart } = formData;
    return (
        <Container maxWidth="xs">
        <h3>D’où partez-vous ?</h3>
        <TextField
            label="D’où partez-vous ?"
            name="depart"
            value={depart}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
        />
        <Button
            variant="contained"
            fullWidth
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => navigation.next()}
            >
                Next
        </Button>
        </Container>
    )
}

export default Depart;
