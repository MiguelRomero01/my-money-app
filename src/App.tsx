import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '@pages/authPage';
import { AuthProvider } from '@helpers/contexts/AuthContext';
import HomePage from '@pages/home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
