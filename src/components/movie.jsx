
import { Movie } from './moviCard'
import styles from '../style/movies.module.css'
import {useEffect , useState } from 'react'
import { getPeliculas } from '../api/httpsClient';

import useQuery from '../hooks/Params_Url';
import Loading from './loading/loading';
import ControllPages from './controllsPages/controlls';


export function MoviesGrid(){
    const [movies,setMovies] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    const [pages,setPages] = useState(2)

    const nameMovie= useQuery(); // obtenemos el nombre o el valor para buscar la pelicula

    useEffect(()=>{
        // MovieUrl guradamos la ruta de consulta ala api
        const movieUrl = nameMovie? 
                        '/search/movie?query='+nameMovie : `/discover/movie?page=${pages}`;
        getPeliculas(movieUrl,(Response)=>{
            setMovies(Response.results)
            setIsLoading(true)
        })
    },[nameMovie,pages])

    const nextPages=()=>{
        setPages(pages+1)
    }

    return(
        isLoading? 
        <>
            <div className={styles.contenedorMovi}>
                {
                    movies.map((movi)=>{
                        return movi.poster_path && <Movie key={movi.id} movi={movi} />
                    })
                }
            </div>
            <ControllPages pages={pages} nextPages={nextPages} />
        </> : <Loading />
    )

}