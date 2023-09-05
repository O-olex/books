import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Components/MainPage';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div><Navbar/>
    <div>
      <Routes>
          <Route path={'/MainPage'} element={<MainPage/>}></Route>
          <Route path={'/Page1'} element={<Page1/>}></Route>
          <Route path={'/Page2'} element={<Page2/>}></Route>
        </Routes>
    </div>
    </div>
  );
}

export default App;
