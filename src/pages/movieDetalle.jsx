
import styles from "../style/moviDetails.module.css"
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { get } from "../api/httpsClient";

export function DetailMovi(){
    const {movieId}= useParams();    
    const [movie,setMovie] = useState(null)

    useEffect(()=>{
        get("/movie/"+movieId).then(data=>{
            setMovie(data)
        })
    },[movieId]);
    if(!movie){
        return null
    }

    const Url = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
    return(
        <div className={styles.conteinerMovi}>
            <img className={`${styles.conteinerMovi} ${styles.moviImg}`} src={Url} alt={movie.title} />
            <div className={`${styles.col} ${styles.moviDetails}`}>
                <p><strong>Title: </strong>{movie.title}</p>
                <p><strong>Genres: </strong>
                {
                    movie.genres.map(gener=> gener.name).join(", ")
                }
                </p>
                <p><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
    )
}