import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "routes";
import NoMatch from "pages/NoMatch";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<p>
								Edit <code>src/App.js</code> and save to reload.
							</p>
							<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
								Learn Reactsss
							</a>
						</header>
					</div>
				</Route>

				{/* map the routes here */}
				{routes.map(props => (
					<Route {...props} />
				))}

				<Route>
					<NoMatch />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
