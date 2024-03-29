import { useEffect, useState } from "react"
import {getPeliculas } from "../../api/httpsClient";

import "./actores.css"

export const Actores =(props)=>{
    const {id}=props;
    const [actors,setActores]= useState([]);

    useEffect(()=>{
        getPeliculas(`/movie/${id}/credits`,(respuesta)=>{
            setActores(respuesta.cast)
            
        })
    },[id]);

    return(
        <div className="content">
            <h1>Reparto principal</h1>
            <div className="content-actores" >
            {
                actors.map((actor,i)=>{
                    if(i < 9 && actor.profile_path)return <div className="actor" key={i}>
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
            
        </div>
    )
}