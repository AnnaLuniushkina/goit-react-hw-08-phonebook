import { useSelector, useDispatch } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";
import defaultAvatar from '../../image/default-avatar.png';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div>
            <img src={avatar} alt="" width="32" />
            <h2>Welcome, {name}</h2>
            <button
                type="button"
                onClick={() => dispatch(authOperations.logOut())}>Log Out</button>
        </div>
    );
}