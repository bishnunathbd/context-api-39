import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <h1>This is App : {category}</h1>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
