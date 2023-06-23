
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getPeliculas } from "../api/httpsClient";
import Loading from "../components/loading/loading";
import { MovieDetalle } from "../components/movieDetalle/detalle";

export function DetailMovi(){
    const {movieId}= useParams();  
    const [isLoading,setIsLoading] = useState(false)  
    const [movie,setMovie] = useState('')
    
    useEffect(()=>{
        getPeliculas(`/movie/${movieId}`,(Response)=>{
            setMovie(Response)
            setIsLoading(true)
        })
    },[movieId]);
    
    
    
    return(
        isLoading? <MovieDetalle movieId={movieId} movie={movie} /> :<Loading />
    )
}