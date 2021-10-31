import React from "react";
import { Link } from "react-router-dom";
import './message.css'

const Message =()=>{

    return(
        <div className="message">
                <h1>Veuillez <Link to="/connexion"> <b> créer un compte</b></Link> ou <Link to="/inscription"> <b> se connecter</b></Link> pour publier un trajet.</h1>
        </div>
    );

}

export default Message;