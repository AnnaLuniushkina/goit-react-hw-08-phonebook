import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}