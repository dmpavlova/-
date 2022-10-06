import { useState } from "react";
import { dataRest } from "./dataRest";
import './App.css';

function Restaurans(){
    const [rests,setRests] = useState(dataRest);
    const removeRest=(id)=>{
        let newRests=rests.filter(rest=>
            rest.id !==id);
            setRests(newRests);
    }
    return(
        <div>
            <div className="container">
            <h2>Где пообедать?</h2>
            <div className="restaurans">
            {rests.map((element=>{
                const {id,name,foto,description}=element;
                return(<div className="container" key={id}>
                    <h3>{name}</h3>
                    <img src={foto} width='300px' alt='rest'/>
                    <p>{description}</p>
                    <button className="btn" onClick={()=>removeRest(id)}>Удалить ресторан</button>
                </div>)
            }))}
            </div>
            <button className="btn btn-all" onClick={()=>setRests([])}>Удалить все</button>
            </div>
        </div>
    )
}
export default Restaurans;