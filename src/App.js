import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import Content from './Components/Content/Content';

function App() {


  return (
    <div className="body">     
      <Routes>
        <Route exact path="/" element={<SideBar />} >
          <Route path="/home" element={<Content />} />
          <Route path="/accountancy" element={<Content />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
