import React from "react";
import "./navbar.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="text-containers">Roshan</div>
			<div className="nav-container1">
				<div className="text-containers">Home</div>
				<div className="text-containers">Products</div>
			</div>
			<div className="nav-container2">
				<div className="text-containers">
					<AiOutlineSearch />
				</div>
				<div className="text-containers">
					<AiOutlineHeart />
				</div>
				<div className="text-containers">
					<BiShoppingBag />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
