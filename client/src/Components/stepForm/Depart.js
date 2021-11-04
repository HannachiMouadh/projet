import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Depart = ({Data,setData,navigation }) => {
  
    return (
        <Container style={{ marginTop: '5%',marginBottom: '12%' }} maxWidth="xs">
        <h3 className="text-center">D’où partez-vous ?</h3>
        <TextField
            label="D’où partez-vous ?"
            name="depart"
            onChange={(e)=>{setData({...Data,depart:e.target.value})}}
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
            Suivant
        </Button>
        </Container>
    )
}

export default Depart;
