import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Prixpass = ({ Data, setData, navigation }) => {
    return (
      <Container maxWidth="xs" style={{ marginTop: '7%',marginBottom: '12%' }}>
        <h3>Quelle est votre prix par place ?</h3>
        <TextField
          label="Quelle est votre prix par place ?"
          name="Quelle est votre prix par place ?"
          onChange={(e)=>{setData({...Data,prix:e.target.value})}}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
          type="N"
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

export default Prixpass
