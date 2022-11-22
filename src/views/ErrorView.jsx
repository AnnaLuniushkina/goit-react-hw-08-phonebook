import { NavLink } from "react-router-dom"
import s from './ErrorView.module.css';

export default function ErrorView() {
    return (
        <>
            <h1 className={s.titleError}>404 Page not found</h1>
            <NavLink to="/">
                <button className={s.errorButton} type="button">Go Home Page</button>
            </NavLink>
        </>
    );
}