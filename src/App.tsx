import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from '@features/auth/registerForm';
import AuthPage from '@pages/authPage';
import { AuthProvider } from '@helpers/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
