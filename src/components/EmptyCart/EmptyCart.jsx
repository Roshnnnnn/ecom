import React from "react";
import "./EmptyCart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const EmptyCart = () => {
	return (
		<div className="empty-wish">
			<div>
				<AiOutlineShoppingCart className="custom-icon" />
				<div className="main-text">Your Cart is Empty</div>
			</div>
		</div>
	);
};

export default EmptyCart;
