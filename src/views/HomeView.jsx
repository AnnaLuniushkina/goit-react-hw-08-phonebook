import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";
import s from "./HomeView.module.css";


export default function HomeView() { 
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const name = useSelector(authSelectors.getUsername);

    return (
        <main>
            {isLoggedIn ? (
                <>
                    <h2 className={s.title}>Welcome, {name}!</h2>
                    <NavLink to="/contacts">
                        <button className={s.authButtonContacts} type="button">My contacts</button>
                    </NavLink>
                </>
            ) : (
                <>
                        <h1 className={s.titleHome}>Welcome to your Phone book</h1>

                        <div className={s.authButtonSection}>
                        <NavLink to="/register">
                            <button className={s.authButton}type="button">Registration</button>
                            </NavLink>
                        <NavLink to="/login">
                            <button className={s.authButton }type="button">LogIn</button>
                        </NavLink>
                        </div>
                    </>
            )}
        </main>
    );
};