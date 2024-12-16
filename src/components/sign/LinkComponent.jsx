import { Link } from "react-router-dom";

export const LinkComponent = ({ children, to }) => {
	return (
		<Link to={to} className="text-center text-blue-500 tracking-wide">
			<small>{children}</small>
		</Link>
	);
};
