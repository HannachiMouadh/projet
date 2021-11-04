import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Voiture = ({Data, setData, navigation }) => {
    return (
        <Container maxWidth="xs" style={{ marginTop: '7%',marginBottom: '12%' }}>
          <h3>Quel est votre model de voiture ?</h3>
          <TextField
            label="Quel est votre model de voiture ?"
            name="modelvoiture"
            onChange={(e)=>{setData({...Data,modelvoiture:e.target.value})}}
            margin="normal"
            Variant="outlined"
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
              Precedent
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => navigation.next()}
            >
              Suivant
            </Button>
          </div>
        </Container>
    )
}

export default Voiture;
