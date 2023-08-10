import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header.jsx";
import EmptyCart from "./components/EmptyCart/EmptyCart";

function App() {
	return (
		<div className="App">
			<Navbar />
			{/* <Header /> */}
			<EmptyCart />
		</div>
	);
}

export default App;
