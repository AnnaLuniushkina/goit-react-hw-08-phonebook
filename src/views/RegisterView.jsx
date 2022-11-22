import { useState } from "react";
import { useDispatch } from "react-redux";

import authOperations from '../redux/auth/auth-operations';
import s from './RegisterView.module.css';



export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={s.registrationBlock}>
            <h2 className={s.registrationTitle}>Registration</h2>

            <form onSubmit={handleSubmit} autoComplete="on" className={s.registrationForm}>
                <label className={s.registrationLabel}>
                    Name
                    <input
                        className={s.registrationInput}
                        type='text'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </label>

                <label className={s.registrationLabel}>
                    Email
                    <input
                        className={s.registrationInput}
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label className={s.registrationLabel}>
                    Password
                    <input
                        className={s.registrationInput}
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button className={s.registrationButton} type="submit">Sign up</button>
            </form>
        </div>
    )
}