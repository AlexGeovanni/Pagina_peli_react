import styles from '../style/moviCards.module.css'
import {Link} from "react-router-dom";

export function Movie ({movi}){
    const Url = `https://image.tmdb.org/t/p/w300${movi.poster_path}`  
    return(
        <div className={styles.moviCard}>
            <Link to={"/movies/" + movi.id} >
                <img width={230} height={345} src={Url} alt={movi.title} />
                <p>{movi.title}</p>
            </Link>
        </div>
    )
}