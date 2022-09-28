import { useState } from "react";
import { useDispatch } from "react-redux";

import authOperations from '../redux/auth/auth-operations';

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
        <div>
            <h1>Сторінка логіна</h1>

            <form onSubmit={handleSubmit} autoComplete="on">
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">LogIn</button>
            </form>
        </div>
    );
}