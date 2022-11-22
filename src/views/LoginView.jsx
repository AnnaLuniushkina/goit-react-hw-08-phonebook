import { useState } from "react";
import { useDispatch } from "react-redux";

import authOperations from '../redux/auth/auth-operations';
import s from './LoginView.module.css';

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={s.loginBlock}>
            <h1 className={s.loginTitle}>Сторінка логіна</h1>

            <form className={s.loginForm} onSubmit={handleSubmit} autoComplete="on">
                <label>
                    Email
                    <input
                        className={s.loginInput}
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                        className={s.loginInput}
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button className={s.loginButton} type="submit">LogIn</button>
            </form>
        </div>
    );
}