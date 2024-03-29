
import styles from "../../style/moviDetails.module.css"
import { Actores } from "../reparto/actoresReparto";
import { CrewMovie } from "../crew/crewmovie";
import { AccionIcon } from "../accionIcon/accionIcon";

export function MovieDetalle({movieId,movie}){

    const Url = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
    const fecha = movie.release_date;
    const anho = fecha.slice(0,4);
    
    return(
        <div className={styles.conteinerMovi}>
            <div 
            style={{background:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
            backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"
            }} 
            className={styles.bgImg}  >
            <div className={styles.details}  >
                <img className={`${styles.conteinerMovi} ${styles.moviImg}`} src={Url} alt={movie.title} />
                <div className={`${styles.col} ${styles.moviDetails}`}>
                    <h1>{movie.title} <span>({anho})</span></h1>
                    <div className={styles.date}>
                        <span>{ movie.release_date} (MX) </span>
                        <span className={styles.gener}>
                            {
                                movie.genres.map(gener=>gener.name).join(", ")
                            } 
                        </span>
                    </div>
                    <AccionIcon />
                    <div className={styles.description}>
                        <h2>Description</h2>
                        <p>{movie.overview}</p>
                    </div>
                    <CrewMovie id={movieId} />
                </div>
            </div>
            </div>
            <Actores id={movieId} />
        </div>
    )
}