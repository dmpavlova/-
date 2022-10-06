import { useState } from 'react';
import { data } from './data';
import back from './back.png';
import forward from './forward.png';
import './App.css';
import Restaurans from './Restaurants';

function App() {
  const [foto,setFoto]=useState(0);
  const {image}=data[foto];

  const previousFoto=()=>{
    setFoto((foto=>{
      foto--;
      if(foto<0){
        foto=data.length-1;
      }
      return foto;
    }))
  }

  const nextFoto=()=>{
    setFoto((foto=>{
      foto++;
      if(foto>data.length-1){
        foto=0;
      }
      return foto;
    }))
  }

  return (
    <div>
      <div className='container'>
        <h1>Путеводитель по Санкт-Петербургу</h1>
        <div className='image-container'>
          <button onClick={previousFoto}><img src={back} alt='back'/></button>
          <img src={image} width='400px' alt='spb'/>
          <button onClick={nextFoto}><img src={forward} alt='forward'/></button>
        </div>
        <Restaurans/>
      </div>
    </div>
  );
}

export default App;
