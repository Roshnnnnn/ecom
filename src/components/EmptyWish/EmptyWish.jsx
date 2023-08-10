import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const EmptyWish = () => {
	return (
		<div className="empty-wish">
			<div>
				<AiOutlineHeart className="custom-icon" />
				<div className="main-text">Your Wishlist is Empty</div>
			</div>
		</div>
	);
};

export default EmptyWish;
