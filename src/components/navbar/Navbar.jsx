import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="text-containers">Roshan</div>
			<div className="nav-container1">
				<div className="text-containers">Home</div>
				<div className="text-containers">Products</div>
			</div>
			<div className="nav-container2">
				<div className="text-containers">Search</div>
				<div className="text-containers">Love</div>
				<div className="text-containers">Cart</div>
			</div>
		</div>
	);
};

export default Navbar;
