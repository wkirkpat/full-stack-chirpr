import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import AddChirp from "./AddChirp";
import Admin from "./Admin";
import MentionsPage from './MentionsPage';



const App: React.FC<IAppProps> = (props) => {
		return (
			<main className="container my-5">
				<Router>
					<Link to="/"><button className="btn btn-primary mx-3">Home</button></Link>
					<Link to="/add"><button className="btn btn-primary mx-3">Add Chirp</button></Link>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path = "/add" component={AddChirp} />
						<Route exact path = "/:id" component={Admin} />
						<Route path = "/mentions/:id" component={MentionsPage} />
					</Switch>
				</Router>
			</main>
		);
}


export interface IAppProps { }

export default App;
