import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header.jsx";
import EmptyCart from "./components/EmptyCart/EmptyCart";
import { Route, Routes } from "react-router-dom";
import EmptyWish from "./components/EmptyWish/EmptyWish";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/cart" element={<EmptyCart />} />
				<Route path="/wish" element={<EmptyWish />} />
			</Routes>
		</div>
	);
}

export default App;
