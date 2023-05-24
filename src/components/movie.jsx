
import { Movie } from './moviCard'
import styles from '../style/movies.module.css'
import {useEffect , useState } from 'react'
import { buscar } from '../api/httpsClient';


export function MoviesGrid(){
    
    const [movies,setMovies] = useState([]);
    
    useEffect(()=>{
        buscar("/discover/movie",(Response)=>{
            setMovies(Response.results)
        })
    },[])
    console.log(movies[0])
    return(
        <div className={styles.contenedorMovi}>
            {
                movies.map((movi)=>{
                    return <Movie key={movi.id} movi={movi} />
                })
            }
        </div>
    )

}