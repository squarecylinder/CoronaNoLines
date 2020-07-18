import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import AccountPage from './pages/AccountPage';
import NoMatch from './pages/404';
import Nav from './components/Nav/Nav'
import './App.css';
import API from './utils/API';
import RestaurantContext from './utils/RestaurantContext'
import Footer from './components/Footer/Footer'
const axios = require("axios");

function App() {
  const [restaurantState, setRestaurantState] = useState({
    companyName: '',
    address: '',
    dineIn: '', 
    tables: '', 
    outsideDining: '', 
    takeOut: '',
    driveThru: '',
    curbside: '',
    open: '', 
    masks: ''
  });
  const restaurantData = {};

  function loadRestaurants() {
    API.GetRestaurant()
    .then((res) => restaurantData = res.data[0]
      // companyName, res.data[0].addres, res.data[0].dineIn, res.data[0].tables, res.data[0].outsideDining, res.data[0].takeOut, res.data[0].driveThru, res.data[0].curbside, res.data[0].open, res.data[0].masks
      )
    .then(console.log(restaurantData))
    .catch(err => console.log(err));
  }
  
  useEffect(() => {
    // loadRestaurants();
      axios.get("/api/restaurant")
      .then((res) => 
      {
      setRestaurantState({
        companyName: res.data[0].companyName,
        address: res.data[0].address,
        dineIn: res.data[0].dineIn, 
        tables: res.data[0].tables,
        outsideDining: res.data[0].outsideDining, 
        takeOut: res.data[0].takeOut, 
        driveThru: res.data[0].driveThru, 
        curbside: res.data[0].curbside, 
        open: res.data[0].open, 
        masks: res.data[0].masks})
      console.log(restaurantState)
    })
  }, []);

  return (
    <Router>
      <RestaurantContext.Provider value={restaurantState}>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/accountpage">
            <AccountPage />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
      </RestaurantContext.Provider>
    </Router>
  );
}
export default App;