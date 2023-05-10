import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin} = useAuth();
    const { signout } = useAuth();
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = async (event) => {
        event.preventDefault();
        signin({ login, password }).then(result => {
            if (result){
                navigate(fromPage);
            }
        });
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        navigate('/register');
    };

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
                </label>
                <br />
                <label>
                    Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Войти</button>
                <button onClick={handleRegister}>Зарегистрируйтесь</button>
            </form>
        </div>
    );
};

export { LoginPage };
