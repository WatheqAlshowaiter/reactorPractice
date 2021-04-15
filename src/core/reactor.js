// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

// import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "register-service-worker";

export default class Reactor {
	/**
	 * Allow the application to work offline
	 */
	workOffline() {
		serviceWorker.register();
		return this;
	}

	/**
	 * start the application
	 */
	react() {}
}
