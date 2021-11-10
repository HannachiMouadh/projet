import React from 'react'

const PrivateRouteUserList = ({component,...rest}) => {
    const isAuth = localStorage.getItem("token");
    const isAdmin=localStorage.getItem("isAuth");


    if(isAuth && isAdmin){
       return <Route component={component} {...rest} />;
    }else{
      return  <Redirect to="/"/>
    }
}

export default PrivateRouteUserList
