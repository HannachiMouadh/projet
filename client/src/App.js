import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import PrivateRoute from './Components/router/PrivateRoute';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import { currentUser } from "./JS/userslice/userSlice";
import './App.css';
import addTrajet from './pages/addTrajet/addTrajet';
import Profile from './pages/Profile/Profile';
import Message from './Components/message/Message';
import HomeAdmin from './Components/AdminComponents/HomeAdmin'
import PrivateRouteProfile from './Components/router/PrivateRouteProfile';
import PrivateRouterAdminHome from './Components/router/PrivateRouterAdminHome';
import FooterAuth from './Components/AdminComponents/FooterAuth';
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/footer/Footer';
import Header from './Components/AdminComponents/Header'
import SideNav from './Components/AdminComponents/SideNav'


const  App = () =>{
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    if(isAuth){dispatch(currentUser());
    }
  }, []);
  const authNav =()=>{
    if(isAuth && user.isAuth == true){
      return <Header/>
    }else {
      return <Navbar/>;
    }
  }
  const authSideNav =()=>{
    if(isAuth && user.isAuth == true){
      return <SideNav/>
    }
  }
  const footerAuth =()=>{
    if(isAuth && user.isAuth == true){
      return <FooterAuth/>
    }else{
      return <Footer/>
    }
  }
  return (
      <div>
          {authNav()}
          {authSideNav()}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/connexion" exact component={Signin}/>
            <Route path="/inscription" exact component={SignUp}/>
            <Route path="/message" exact component={Message}/>

            <PrivateRoute component={addTrajet}  path="/trajet"/>
            <PrivateRouteProfile component2={Profile} path2="/profile" />
            <PrivateRouterAdminHome component3={HomeAdmin} path3="/admin/home"/>
          </Switch>
          {footerAuth()}
      </div>
    
  );
}

export default App;
