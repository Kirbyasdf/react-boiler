import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route render={() => <h1 className="tc">404 not found</h1>} />
		</Switch>
	);
};

const HomePage = () => {
	return (
		<div className="bg-black vh-100 white pa3 tc">
			<span className="f1 yellow">Welcome</span>
			<div className="f3 mv2">
				<span> This app has been preloaded with</span>
				<br />
				<a
					className="link hover-dark-red f2 i "
					href="https://reactrouter.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Router
				</a>
				<br />
				<span>and</span> <br />
				<a
					className="link hover-dark-red f2  i "
					href="https://tachyons.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Tachyons
				</a>
			</div>
			<span className="f3"> You can also come</span>
			<a
				className="link hover-dark-green ml2 gray f2"
				href="https://augustuskirby.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				home
			</a>
		</div>
	);
};

export default App;
{
	/* <a
className="link hover-dark-red  i "
href="https://reactrouter.com/"
target="_blank"
rel="noopener noreferrer"
>
React Router
</a> */
}
