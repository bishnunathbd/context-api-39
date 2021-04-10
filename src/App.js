import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={count}>
      <h1>This is App : {count}</h1>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
