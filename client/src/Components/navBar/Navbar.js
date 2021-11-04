import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from "../../JS/userslice/userSlice";
import './nav.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = localStorage.getItem("token");
    const handlelogout =()=>{
        dispatch(logout());
        history.push('/');
     }
     useEffect(() => {
        $(window).on('scroll',function(){
            if($(window).scrollTop()){
              $('nav').addClass('black');
            }else {
              $('nav').removeClass('black');
            }
          })
     }, [])
    
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src="./lg2.gif" />
                </Link>
            </div>
            <ul>
                <Link to="/trajet">
                    <li>Publier un trajet</li>
                </Link>
                {isAuth? 
                    <ul>
                        <li>Mes trajets</li>
                        <Link to="/profile">
                            <li>Mon Profile</li>
                        </Link>
                        <li onClick={handlelogout}>Deconnexion</li>
                    </ul>
                    :
                    <ul>
                        <Link to='/connexion'>
                            <li>Connexion</li>
                        </Link>
                        <Link to="/inscription">
                            <li>Inscription</li>
                        </Link>
                    </ul>
                }                    
            </ul>   
        </nav>
    );
}

export default Navbar;
