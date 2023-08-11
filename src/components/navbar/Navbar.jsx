import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import {
	AiOutlineSearch,
	AiOutlineHeart,
	AiOutlineClose,
} from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { BiShoppingBag } from "react-icons/bi";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	return (
		<nav className="nav-bar">
			<div className="left-nav">
				{showMenu ? (
					<AiOutlineClose
						className="icon"
						onClick={() => setShowMenu(false)}
						width="1em"
						height="1em"
						viewBox="0 0 512 512"
					/>
				) : (
					<TiThMenu
						className="icon"
						onClick={() => setShowMenu(true)}
						width="1em"
						height="1em"
						viewBox="0 0 512 512"
					/>
				)}
				{/* <Link to={"/"}>Roshan</Link> */}
			</div>
			<ul className="mid-nav-links">
				<li>
					<NavLink to="/">HOME</NavLink>
				</li>
				<li>
					<NavLink to="/product">Products</NavLink>
				</li>
			</ul>
			<div className="right-nav-links">
				<div>
					<span className="badge">
						<AiOutlineSearch
							onClick={() => showSearch(true)}
							width={"1em"}
							height={"1em"}
							viewBox="0 0 32 32"
						/>
					</span>
					<SearchBar />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
