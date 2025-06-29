import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

function App() {

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='login' element={<LoginPage />} />
                    <Route path='signup' element={<SignupPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;