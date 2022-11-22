import { useSelector, useDispatch } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "redux/auth/auth-operations";
import defaultAvatar from '../../image/default-avatar.png';
import s from "./UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div className={s.userMenu}>
            <img className={s.avatar} src={avatar} alt="Avatar" width="30" height="30" />
            <h2 className={s.userName}>{name}</h2>
            <button
                className={s.logOutButton}
                type="button"
                onClick={() => dispatch(authOperations.logOut())}>Log Out</button>
        </div>
    );
}