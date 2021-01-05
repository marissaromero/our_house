import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";


// ReactDOM.render(<App />, document.getElementById('app'));


const rootElement = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
  </Switch>
  </BrowserRouter>,
  rootElement
);