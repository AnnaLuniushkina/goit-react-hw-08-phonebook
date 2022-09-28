import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";

export default function HomeView() { 
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUsername);

    return (
        <main>
            {isLoggedIn ? (
                <>
                    <h2>Welcome, {name}!</h2>
                    <NavLink to="/contacts">
                        <button type="button">My contacts</button>
                    </NavLink>
                </>
            ) : (
                <>
                        <h2>Welcome to Phone book</h2>
                        {/* <NavLink to="/register">
                            <button type="button">Register</button>
                        </NavLink>
                        <NavLink to="/login">
                            <button type="button">LogIn</button>
                        </NavLink> */}
                    </>
            )}
        </main>
    );
};