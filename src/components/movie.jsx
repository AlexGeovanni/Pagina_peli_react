
import { Movie } from './moviCard'
import styles from '../style/movies.module.css'
import {useEffect , useState } from 'react'
import { get } from '../api/httpsClient';


export function MoviesGrid(){
    
    const [movies,setMovies] = useState([]);
    
    useEffect(()=>{
        get("/discover/movie").then((data )=>{
            // movies = data.results
            // console.log(movies)
            setMovies(data.results)
        })
    },[])
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