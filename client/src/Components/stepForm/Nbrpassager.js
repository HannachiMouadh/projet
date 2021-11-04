import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Nbrpassager = ({Data,setData,navigation }) => {
    return (
        <Container maxWidth="xs" style={{ marginTop: '7%',marginBottom: '12%' }}>
      <h3>Combien de place vous allez accepter ?</h3>
      <TextField
        label="Combien de place vous allez accepter ?"
        name="Combien de place vous allez accepter ?"
        onChange={(e)=>{setData({...Data,nombredepassage:e.target.value})}}
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

export default Nbrpassager
