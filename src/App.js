import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Country></Country>
      
    </div>
  );
}

function Country(){
  const [countries,setCountry] = useState([]);
  console.log(countries)
  return(
    <div>
      <h2>Name: Bangladesh</h2>
    </div>
  );
}

export default App;
