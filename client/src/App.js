import React from "react";
import './App.css';
import Words from "./Words/Words";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Words />
        <ToastContainer theme="dark"/>
    </div>
  );
}

export default App;
