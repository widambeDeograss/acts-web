import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routeer from './routes';
import Layout from './components/Layout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routeer />
      </BrowserRouter>
    </div>
  );
}

export default App;
