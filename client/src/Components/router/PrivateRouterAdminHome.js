import React from 'react'
import { useSelector } from 'react-redux';
import {Route } from 'react-router-dom';


const PrivateRouterAdminHome = ({component3,path3}) => {
    const isAuth = localStorage.getItem("token");
    const user = useSelector((state) => state.user.user);

    if(isAuth && user.isAuth == true){
       return <Route exact component={component3} path={path3} />;
    }
}

export default PrivateRouterAdminHome
