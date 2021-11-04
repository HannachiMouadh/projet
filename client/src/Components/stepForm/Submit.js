import React from "react";
import Container from '@material-ui/core/Container';

const Submit = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
       <div className="card2 ml-2">
            <div className="row px-3 mt-2 mb-4 text-center">
                <h2 className="col-12 text-danger"><strong>Succès !</strong></h2>
                <div className="col-12 text-center"><img className="tick" src="https://i.imgur.com/WDI0da4.gif" /></div>
                <h6 className="col-12 mt-2"><i>...Enjoy COOKIES...</i></h6>
            </div>
        </div>

    </Container>
  );
};

export default Submit;