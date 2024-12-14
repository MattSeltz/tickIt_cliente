import { Link } from "react-router-dom";

export const LinkComponent = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="shadow-sm shadow-black p-3 rounded-md transition-shadow hover:shadow-inner hover:shadow-black"
    >
      {children}
    </Link>
  );
};
