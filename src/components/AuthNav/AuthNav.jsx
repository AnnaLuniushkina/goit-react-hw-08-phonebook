import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
    return (
        <nav className={s.authNav}>
            <NavLink
                className={s.authLink}
                to="/register">
                Registration
            </NavLink>

            <NavLink
                className={s.authLink}
                to="/login">
                LogIn
            </NavLink>
        </nav>
    );
}