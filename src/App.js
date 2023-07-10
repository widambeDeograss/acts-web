import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' Component={Layout}>
          <Route  index Component={Home}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
