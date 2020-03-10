/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
const React = require("react");
const ReactDOM = require("react-dom");
import { Router } from "@reach/router"
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');
import Login from "./pages/Login";
import Home from "./pages/home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Login path="/" />
                <Home path="/home/*">
                </Home>
            </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("example"));
