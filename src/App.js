import './App.css';
import React from 'react';
import Calendar from './components/Calendar';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = "https://api.github.com/";

  return (
    <Calendar />
  );
}

export default App;
