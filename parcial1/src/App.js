import logo from './logo.svg';
import './App.css';
import Carros from './components/Carros';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Carros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 }
 
 export default App;
