import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {LoginPage} from './pages/Loginpage';

import {TestPage} from './pages/Testpage';
import {RequireAuth} from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';
import {TestHomePage} from "./pages/Testhomepage";
import {Layout} from "./components/Layout";
import {RegisterPage} from "./pages/Registerpage";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<TestHomePage/>}></Route>
                        <Route path="tests" element={
                            <RequireAuth>
                                <TestPage/>
                            </RequireAuth>
                        }></Route>
                        <Route path="login" element={<LoginPage/>}></Route>
                        <Route path="register" element={<RegisterPage/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;