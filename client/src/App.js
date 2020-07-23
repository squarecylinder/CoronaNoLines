import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import AccountPage from './pages/AccountPage';
import NoMatch from './pages/404';
import Nav from './components/Nav/Nav'
import './App.css';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
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
          <Route path="/accountpage/:id">
            <AccountPage />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;