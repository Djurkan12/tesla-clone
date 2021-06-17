import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <Header menu={menu} setMenu={setMenu}></Header>
      <Home menu={menu} setMenu={setMenu}></Home>
    </div>
  );
}

export default App;
