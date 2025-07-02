import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AccessRoutes from './routes/AccessRoutes.jsx';
import EmailConfirmation from './pages/EmailConfirmation.jsx';

function App() {

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route element={<AccessRoutes.Public />} >
                        <Route path='login' element={<LoginPage />} />
                        <Route path='signup' element={<SignupPage/>} />
                        <Route path='/signup/emailcfm' element={<EmailConfirmation />} />
                    </Route>
                    <Route element={<AccessRoutes.Protected />} >
                        <Route path='dashboard' element={<Dashboard />} />
                    </Route>
                    <Route index element={<LoginPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;