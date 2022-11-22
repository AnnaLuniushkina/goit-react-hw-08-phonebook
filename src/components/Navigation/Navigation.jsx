import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import s from "./Navigation.module.css";

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <nav >
            <NavLink className={s.userNavigation} to="/">
                Home
            </NavLink>

            {isLoggedIn && (
                <NavLink className={s.userNavigation} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}