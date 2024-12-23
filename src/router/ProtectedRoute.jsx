import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, children, redirectTo = "/" }) => {
	if (!JSON.parse(sessionStorage.getItem("UsuarioLogeado")))
		return <Navigate to={redirectTo} />;

	return <Outlet />;
};
