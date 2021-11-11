import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Review from './Pages/Review/Review';
import AddProduct from './Pages/AddProduct/AddProduct';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PrivatePurchase from './Pages/PrivatePurchase/PrivatePurchase';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/review">
            <Review></Review>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/addproduct">
            <AddProduct></AddProduct>
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
