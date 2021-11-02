import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from "../../JS/userslice/userSlice";
import './nav.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = localStorage.getItem("token");
    const handlelogout =()=>{
        dispatch(logout());
        history.push('/');
     }
    
    return (
        <div className="banner">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/">
                    <a className="navbar-brand">
                        <img src="./lg2.gif" />
                    </a>
                    </Link>
          
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <Link to="/trajet">
                        <li className="nav-item ">
                            <a className="nav-link">Publier un trajet<span className="sr-only" /></a>
                        </li>
                        </Link>
                        {
                            isAuth? 
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link">Mes trajets</a>
                                    </li>
                                    <Link to="/profile">
                                        <li className="nav-item ">
                                            <a className="nav-link">Mon Profile<span className="sr-only" /></a>
                                        </li>
                                    </Link>
                                    <li className="nav-item" >
                                        <a className="nav-link" onClick={handlelogout}>Deconnexion</a>
                                    </li>
                                </ul>
                            :
                            <ul className="navbar-nav ml-auto"><Link to='/connexion'>
                                <li className="nav-item">
                                    <a className="nav-link">Connexion</a>
                                </li>
                            </Link>
                            <Link to="/inscription">
                                <li className="nav-item">
                                    <a className="nav-link">Inscription</a>
                                </li>
                            </Link></ul>
                        }                    
                    </ul>   
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
