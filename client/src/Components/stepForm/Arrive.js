import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const arrive = ({ formData, Data,setData,setForm, navigation }) => {
    return (
        <Container maxWidth="xs" style={{ marginTop: '7%',marginBottom: '12%' }}>
      <h3>Où voulez-vous aller ?</h3>
      <TextField
        label="arrive"
        name="arrive"
        onChange={(e)=>{setData({...Data,arrive:e.target.value})}}

        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
    )
}

export default arrive
