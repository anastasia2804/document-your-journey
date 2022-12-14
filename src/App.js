import './App.css';
import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/day1" element={<Day1/>}/>
        <Route path="/day2" element={<Day2/>}/>
  
       

      </Routes>
    </div>
  );
}

export default App;
