import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Users from "./user/User";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/user/:id" component={Users} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
