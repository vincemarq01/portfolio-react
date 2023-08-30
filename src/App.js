import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/section/navbar";
import Hero from "./components/section/Hero";
import Skills from "./components/section/Skills";
import About from "./components/section/About";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className="App ">
			<BrowserRouter>
				<Navbar />

				<Hero />
				<Skills />
				<About />
			</BrowserRouter>
		</div>
	);
}

export default App;
