import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "routes";
import NoMatch from "pages/NoMatch";
import Example from "pages/Example";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Example />
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
