import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Routeer from './routes';
import Loader from "./assets/loaderr.gif";
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <React.Suspense fallback={
      <div className='flex flex-col items-center justify-center h-screen'>
      <img src={Loader} alt="Loading..." className='max-w-md' />
      <h6 className='text-xs'>Loading...</h6>
      </div>
    }>
      <ErrorBoundary>
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
       <Routeer />
      </BrowserRouter>
      </Provider>
     
    </div>
    </ErrorBoundary>
    </React.Suspense>
  );
}

export default App;
