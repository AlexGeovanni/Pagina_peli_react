import { useEffect, useState } from "react"
import { buscar } from "../../api/httpsClient";

import "./actores.css"

export const Actores =(props)=>{
    const {id}=props;
    const [actores,setActores]= useState([]);
    const [valormas,setValormas]= useState(9)

    useEffect(()=>{
        buscar(`/movie/${id}/credits`,(respuesta)=>{
            setActores(respuesta.cast)
            console.log(respuesta.cast.length)
        })
    },[id]);

    const verMasActores=()=>{
        setValormas(valormas+9)
        console.log(valormas)
    }
    return(
        <div className="content">
            <h1>Reparto principal</h1>
            <div className="content-actores" >
            {
                actores.map((actor,i)=>{
                    if(i < valormas)return <div className="actor" key={i}>
                                {/* <div className="img"> */}
                                    <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`} alt={actor.name} />
                                {/* </div> */}
                                <div> 
                                    <h2>{actor.name}</h2>
                                    <p>{actor.character}</p>
                                </div>
                            </div>
                    
                    return null
                })
            }
            </div>
            <button className="button" onClick={verMasActores} >Ver mas</button>
        </div>
    )
}