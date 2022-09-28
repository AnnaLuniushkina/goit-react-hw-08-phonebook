import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <nav>
            <NavLink to="/">
                Home Page
            </NavLink>

            {isLoggedIn && (
                <NavLink to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
}