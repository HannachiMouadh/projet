import React from 'react';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Textarea } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import AddTrajet from '../../pages/addTrajet/AddTrajet';

const Description = ({Data,setData,navigation }) => {
  const dispatch = useDispatch();
  const handleAdd =()=>{
    dispatch(AddTrajet(Data));
    
  }
    return (
        <Container style={{ marginTop: '7%',marginBottom: '12%' }} maxWidth="xs">
        <h3>Quel est votre termes ?</h3>
        <textarea
          className="form-control"
          label="Last Name"
          name="description"
          onChange={(e)=>{setData({...Data,description:e.target.value})}}
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
            précedent
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={()=>{handleAdd();navigation.next()}}>
            Ajouter
          </Button>
        </div>
      </Container>
    )
}

export default Description;
