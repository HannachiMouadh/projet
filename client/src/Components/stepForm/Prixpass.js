import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Prixpass = ({ formData, setForm, navigation }) => {
    const { prix, description } = formData;

    return (
        <Container maxWidth="xs">
      <h3>Names</h3>
      <TextField
        label="First Name"
        name="prix"
        value={prix}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="description"
        value={description}
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

export default Prixpass
