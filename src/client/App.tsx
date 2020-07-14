import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import AddChirp from "./AddChirp";
import Admin from "./Admin";
import MentionsPage from "./MentionsPage";

const App: React.FC<IAppProps> = (props) => {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light mb-4">
        <Link to="/">
          <img
            src="https://vignette.wikia.nocookie.net/skylines/images/6/67/Chirpy.png/revision/latest/scale-to-width-down/340?cb=20150911043322"
            width="30"
            height="30"
            alt=""
          />{" "}
        </Link>
        <Link to="/">
          <button className="btn btn-primary mx-3">Home</button>
        </Link>
        <Link to="/add">
          <button className="btn btn-primary mx-3">Add Chirp</button>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddChirp} />
        <Route exact path="/:id" component={Admin} />
        <Route path="/mentions/:id" component={MentionsPage} />
      </Switch>
    </Router>
  );
};

export interface IAppProps {}

export default App;
