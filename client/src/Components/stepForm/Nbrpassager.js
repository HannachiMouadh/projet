import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Nbrpassager = ({ formData, setForm, navigation }) => {
    const { nombredepassage } = formData;

    return (
        <Container maxWidth="xs">
      <h3>Names</h3>
      <TextField
        label="First Name"
        name="nombredepassage"
        value={nombredepassage}
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

export default Nbrpassager
