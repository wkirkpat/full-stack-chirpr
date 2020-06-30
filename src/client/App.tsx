import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import AddChirp from "./AddChirp";
import Admin from "./Admin";



const App: React.FC<IAppProps> = (props) => {
		return (
			<main className="container my-5">
				<Router>
					<Link to="/"><button className="btn btn-primary">Home</button></Link>
					<Link to="/add"><button className="btn btn-primary">Add Chirp</button></Link>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path = "/add" component={AddChirp} />
						<Route path = "/:id" component={Admin} />
					</Switch>
				</Router>
			</main>
		);
}


export interface IAppProps { }

export default App;
