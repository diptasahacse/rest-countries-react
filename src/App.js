import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Country></Country>
      
    </div>
  );
}

function Country(){
  const [countries,setCountry] = useState([]);
  

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>setCountry(data));
  },[]);
  
  return(
    <div className='country-list'>
      {
        countries.map(country => <MakeCountryList singleCountry={country}></MakeCountryList>)

      }
    </div>
  );
}
function MakeCountryList(props){
  
  const {area,population} = props.singleCountry;
  const {png} = props.singleCountry.flags;
  console.log(props.singleCountry)
  return(
    <div className='country'>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <img src={png} alt="" />

    </div>
  );

}

export default App;
