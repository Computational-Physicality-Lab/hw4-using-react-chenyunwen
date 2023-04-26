import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import appRoutes from './shared/appRoutes';

import NavBar from './containers/NavBar/NavBar';
import HomePage from './containers/HomePage/HomePage';
import NotImplementedPage from './containers/NotImplementedPage/NotImplementedPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <header className="App-header"></header> */}
      <div className='MainContent'>
        <Routes>
          <Route path ={appRoutes.home} element={<HomePage />}  exact/>
          <Route path ={appRoutes.not_implemented} element={<NotImplementedPage />}/>
        </Routes>
      </div>

      </div>
  );
}

export default App;
