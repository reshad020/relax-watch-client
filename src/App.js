import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Review from './Pages/Review/Review';

function App() {
  return (
    <div>
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
          <Route exact path="/review">
            <Review></Review>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
