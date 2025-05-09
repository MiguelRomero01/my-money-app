import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './features/auth/loginForm';
import RegisterForm from './features/auth/registerForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
