import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
}));

const Date_dep = ({Data,setData,navigation }) => {
  const classes = useStyles();
    return (
        <Container maxWidth="xs" style={{ marginTop: '7%',marginBottom: '12%' }}>
      <h3>Quelle est votre date de depart ?</h3>
      <form className={classes.container} noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        onChange={(e)=>{setData({...Data,date_dep:e.target.value})}}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
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

export default Date_dep
