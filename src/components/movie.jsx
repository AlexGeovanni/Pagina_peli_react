
import { Movie } from './moviCard'
import styles from '../style/movies.module.css'
import {useEffect , useState } from 'react'
import { getPeliculas } from '../api/httpsClient';

import useQuery from '../hooks/Params_Url';
import Loading from './loading/loading';


export function MoviesGrid(){
    const [movies,setMovies] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    const namePelicula = useQuery(); // obtenemos el nombre o el valor para buscar la pelicula
    useEffect(()=>{
        const Peliculas = namePelicula ? 
        '/search/movie?query='+namePelicula:"/discover/movie"
        getPeliculas(Peliculas,(Response)=>{
            setMovies(Response.results)
            setIsLoading(true)
        })
    },[namePelicula])


    return(
        isLoading? 
        <div className={styles.contenedorMovi}>
            {
                movies.map((movi)=>{
                    return movi.poster_path && <Movie key={movi.id} movi={movi} />
                })
            }
        </div> : <Loading />
    )

}