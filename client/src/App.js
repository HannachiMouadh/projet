import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import PrivateRoute from './Components/router/PrivateRoute';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import { currentUser, getAllUsers } from "./JS/userslice/userSlice";
import './App.css';
import AddTrajet from './pages/addTrajet/AddTrajet';
import Profile from './pages/Profile/Profile';
import Message from './Components/message/Message';
import PrivateRouteProfile from './Components/router/PrivateRouteProfile';
import PrivateRouterAdminHome from './Components/router/PrivateRouterAdminHome';
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/footer/Footer';
import PrivateRouteListTrajets from './Components/router/PrivateRouteListTrajets';
import ListtTrajets from './pages/ListTrajets/ListtTrajets';
import AdminHome from './pages/pagesAdmin/AdminHome/AdminHome';
import UsersList from './pages/pagesAdmin/UsersList/UsersList';


const  App = () => {

  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAuth");

  useEffect(() => {
    if(isAuth){dispatch(currentUser());
      dispatch(getAllUsers())
    }
  }, []);
    
  return (
      <div>
         <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/connexion"  component={Signin}/>
            <Route path="/inscription" component={SignUp}/>
            <Route path="/message" component={Message}/>
            <PrivateRouterAdminHome exact path="/admin/home" component={AdminHome} />
            <PrivateRouteListTrajets exact path="/admin/home/listuser" component={UsersList}/>
            <PrivateRoute path="/trajet" component={AddTrajet}/>
            <PrivateRouteProfile  component={Profile} path="/profile"/>
            <PrivateRouteListTrajets component={ListtTrajets} path="/mestrajets"/>
          </Switch>
          <Footer/>
      </div>
    
  );
}

export default App;
