import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="text-container">Roshan</div>
			<div className="nav-container1">
				<div className="text-container">Home</div>
				<div className="text-container">Products</div>
			</div>
			<div className="nav-container2">
				<div className="text-container">Search</div>
				<div className="text-container">Love</div>
				<div className="text-container">Cart</div>
			</div>
		</div>
	);
};

export default Navbar;
