import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Routeer from './routes';
import Layout from './components/Layout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
       <Routeer />
      </BrowserRouter>
      </Provider>
     
    </div>
  );
}

export default App;
