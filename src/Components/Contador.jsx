import '../assets/Contador.css';
import { useState } from 'react';
const Contador = () => {
  const[contador, setContador] = useState(0);
  return (
     <div className='contenedor'>
    <form className="form">
    <p className="heading">{contador}</p>
    <button className="btn1" onClick={(e) =>{e.preventDefault(); setContador(contador+1)}}>+</button>
    <button className="btn2" onClick={(e) =>{e.preventDefault(); contador > 0 ? setContador(contador-1) : setContador(0)}} >-</button>
  </form>
    </div>
  )
}

export default Contador