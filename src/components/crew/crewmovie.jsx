import { useEffect, useState } from "react"
import { buscar } from "../../api/httpsClient";

import "./crewMovie.css"

export const CrewMovie =(props)=>{
    const  {id}= props
    const [Crew,setCrew]=useState([]);
    useEffect(()=>{
        buscar(`/movie/${id}/credits`,(Response)=>{
            setCrew(Response.crew)
        })
    },[id])
    return(
        <ul className="content-crew">
            {
                Crew.map((crew,i)=>{
                    if(crew.job === "Characters" || crew.job ==="Director" || crew.job==="Screenplay" || crew.job === "Writer"){
                        return <li key={`${crew.name}-${i}`}>
                            <p>{crew.name}</p>
                            <span>{crew.job}</span>
                        </li>
                    } 
                    return null
                })
            }
        </ul>
    )
} 