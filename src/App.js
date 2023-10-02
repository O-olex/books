import { Routes, Route } from 'react-router-dom';
import c from './App.module.css';
import MainPage from './Components/MainPage/MainPage';
import Library from './Components/Library/Library';
import Favourites from './Components/Favourites/Favourites';
import Recommended from './Components/Recommended';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className={c.App}><Navbar/>
    <div className={c.app_child}>
      <Routes>
          <Route path={'/MainPage'} element={<Recommended/>}></Route>
          <Route path={'/Recommended'} element={<Recommended/>}></Route>
          <Route path={'/Library'} element={<Library/>}></Route>
          <Route path={'/Favourites'} element={<Favourites/>}></Route>
        </Routes>
    </div>
    </div>
  );
}

export default App;
