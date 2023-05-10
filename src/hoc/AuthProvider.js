import {createContext, useState} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [error, setError] = useState('');

    const login = async (formData) => {
        try {
            const response = await fetch('http://localhost:8080/loginUser', {
                "method": 'POST',
                "headers": {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            localStorage.setItem('user', JSON.stringify(data));
            if (data === true){
                setUser(data);
                console.log("YOU'RE NOT A PIZDABOL")

            }

            return data;
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    };

    const signout = (cb) => {
        setUser(null);
        localStorage.removeItem('user');
        cb();
    };

    const register = async (formData) => {
        // Изменяем поля объекта formData
        console.log(formData);
        try {
            const response = await fetch('http://localhost:8080/registerUser', {
                "method": 'POST',
                "headers": {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    };


    const value = {user, error, signin: login, signout, signup: register};

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};
