import { useEffect, useState } from "react"
import { getPeliculas } from "../../api/httpsClient";

import "./crewMovie.css"

export const CrewMovie =(props)=>{
    const  {id}= props
    const [crews,setCrews]=useState([]);
    useEffect(()=>{
        getPeliculas(`/movie/${id}/credits`,(Response)=>{
            setCrews(Response.crew)
        })
    },[id])
    return(
        <ul className="content-crew">
            {
                crews.map((crew,i)=>{
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