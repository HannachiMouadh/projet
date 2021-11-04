import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const CouleurVoiture = ({ Data,setData, navigation }) => {
    return (
        <Container maxWidth="xs" style={{ marginTop: '7%',marginBottom: '12%' }}>
        <h3>Quel est votre couleur de voiture ?</h3>
        <TextField
          label="Last Name"
          name="couleurvoiture"
          onChange={(e)=>{setData({...Data,couleurvoiture:e.target.value})}}
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

export default CouleurVoiture
