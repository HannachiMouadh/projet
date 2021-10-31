import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteProfile = ({component2,path2}) => {
    const isAuth = localStorage.getItem("token");
        
        if(isAuth){
        return <Route component={component2} path={path2} />;
        }else{
            
            return <Redirect to="/connexion"/>;
        }
        
   
}

export default PrivateRouteProfile;
