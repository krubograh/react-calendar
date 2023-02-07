import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

function App() {
  axios.defaults.baseURL = 'https://api.github.com/';

  return (
    <Routes>
      <Route path='/' element={<Calendar />} />
      <Route path='/:urlDate' element={<Calendar />} />
    </Routes>
  );
}

export default App;
