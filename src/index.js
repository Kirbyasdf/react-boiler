import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import "tachyons";

ReactDOM.render(
	<Router>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById("root")
);
