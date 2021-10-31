import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import PrivateRoute from './Components/router/PrivateRoute';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import { currentUser } from "./JS/userslice/userSlice";
import './App.css';
import Navbar from './Components/navBar/Navbar'
import addTrajet from './pages/addTrajet/addTrajet';
import Footer from './Components/footer/Footer';
import Profile from './pages/Profile/Profile';
import Message from './Components/message/Message';
import Header from './Components/AdminComponents/Header'
import SideNav from './Components/AdminComponents/SideNav'
import HomeAdmin from './Components/AdminComponents/HomeAdmin'
// import Footer from './Components/AdminComponents/Footer'


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
  return (
      <div>
          {/* 
          <Home/>
          <Footer/> */}
          {authNav()}
          {authSideNav()}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/admin/home" exact component={Home}/>
            <Route path="/connexion" exact component={Signin}/>
            <Route path="/inscription" exact component={SignUp}/>
            <Route path="/message" exact component={Message}/>
            <PrivateRoute component={addTrajet}  path="/trajet" component2={Profile} path2="/profile" />
            <PrivateRoute component2={Profile} path2="/profile" />
          </Switch>
          <Footer/>
        
      </div>
    
  );
}

export default App;
