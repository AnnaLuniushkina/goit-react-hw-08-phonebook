import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

// Якщо маршрут обмежений і юзер залогінений, то рендеримо редирект на redirectTo
// В іншом випадку рендеримо компонент

export default function PublicRoute({children, restricted = false, redirectTo = '/' }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldNavigate = isLoggedIn && restricted;
    return shouldNavigate ? (<Navigate to={redirectTo} replace={true} />) : (
        children
    );
}