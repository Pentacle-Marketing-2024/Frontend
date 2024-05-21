import './App.css';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import FormList from './Components/FormList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/LoginAdmin" element={<Login/>} />
        <Route path="/AdminPage" element={<FormList/>} />
      </Routes>
    </Router>
  );
};

export default App;