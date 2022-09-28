import { NavLink } from "react-router-dom"

export default function ErrorView() {
    return (
        <>
            <h1>404 Page not found</h1>
            <NavLink to="/">
                <button type="button">Go Home Page</button>
            </NavLink>
        </>
    );
}