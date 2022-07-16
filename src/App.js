import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users/" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
