import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'

import AddProduct from './Pages/AddProduct/AddProduct';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PrivatePurchase from './Pages/PrivatePurchase/PrivatePurchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          
          <Route  path="/register">
            <Register></Register>
          </Route>
          <Route  path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/purchase/:id">
            <PrivatePurchase></PrivatePurchase>
          </PrivateRoute>
        </Switch>
      </BrowserRouter> 
      </AuthProvider>
    </div>
  );
}

export default App;
