import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const arrive = ({ formData, setForm, navigation }) => {
    return (
        <Container maxWidth="xs">
      <h3>Où voulez-vous aller ?</h3>
      <TextField
        label="arrive"
        name="arrive"
        value={arrive}
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

export default arrive
