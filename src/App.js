import React from "react";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomProvider from "./components/Context";

function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </RoomProvider>
  );
}

export default App;
