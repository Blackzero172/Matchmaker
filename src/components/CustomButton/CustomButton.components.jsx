import React from "react";

const CustomButton = ({ text, children, onClick, style }) => {
	return (
		<button type="button" onClick={onClick} style={style}>
			{children}
			{text}
		</button>
	);
};
export default CustomButton;
