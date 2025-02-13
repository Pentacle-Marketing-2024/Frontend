import './App.css';
import Login from './Components/Admin/Login';
import MainPage from './Components/User/MainPage';
import FormList from './Components/Admin/FormList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<FormList/>} />
      </Routes>
    </Router>
  );
};

export default App;