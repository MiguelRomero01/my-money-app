import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './features/auth/loginForm';
import RegisterForm from './features/auth/registerForm';
import AuthPage from './pages/authPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
