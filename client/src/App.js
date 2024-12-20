import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Home from './page/Home';
import InquaryList from './page/InquaryList';

function App() {
  const token = localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        {/* Redirect the root path to login page */}
        <Route path="/" element={token ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        {/* Routes for login, register, and home */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/inquaryList' element={<InquaryList/>} />
      </Routes>
    </Router>
  );
}

export default App;
