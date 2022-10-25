import './App.css';
import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage';
import Day1 from './pages/week1/Day1';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/week1/day1" element={<Day1/>}/>
  
       

      </Routes>
    </div>
  );
}

export default App;
