import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import PrivateRoute from './Components/router/PrivateRoute';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import { currentUser } from "./JS/userslice/userSlice";
import './App.css';
import AddTrajet from './pages/addTrajet/AddTrajet';
import Profile from './pages/Profile/Profile';
import Message from './Components/message/Message';
import HomeAdmin from './Components/AdminComponents/HomeAdmin';
import PrivateRouteProfile from './Components/router/PrivateRouteProfile';
import PrivateRouterAdminHome from './Components/router/PrivateRouterAdminHome';
import FooterAuth from './Components/AdminComponents/FooterAuth';
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/footer/Footer';
import Header from './Components/AdminComponents/Header';
import SideNav from './Components/AdminComponents/SideNav';


const  App = () => {

  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAuth");


  useEffect(() => {
    if(isAuth){dispatch(currentUser());
    }
  }, []);
  
  const authNav =()=>{
    if(isAuth && isAdmin){
      return <Header/>
    }else {
      return <Navbar/>;
    }
  }
 const authSideNav =()=>{
   if(isAuth &&isAdmin){
     return <SideNav/>
   }
 }
 const footerAuth =()=>{
   if(isAuth && isAdmin){
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
            <Route path="/connexion"  component={Signin}/>
            <Route path="/inscription" component={SignUp}/>
            <Route path="/message" component={Message}/>
            <PrivateRouterAdminHome path="/admin/home" component={HomeAdmin} />

            <PrivateRoute path="/trajet" component={AddTrajet}/>
            <PrivateRouteProfile path="/profile" component={Profile}  />
          </Switch>
          {footerAuth()} 
      </div>
    
  );
}

export default App;
