import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';
import { useState } from 'react';

const RegisterPage = () => {
    const navigate = useNavigate();
    const {signup, error} = useAuth();
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signup({login, password}, () => navigate("/login"));
        } catch (error) {
            console.log(error.message);
        }
    };



    return (
        <div>
            <h1>Register page</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="login" value={login} onChange={(e) => setLogin(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password: <input type="password" name="password" value={password}
                                     onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Закончить регистрацию</button>
            </form>
        </div>
    );
};

export {RegisterPage};
