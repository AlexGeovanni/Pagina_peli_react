import styles from '../style/moviCards.module.css'
import {Link} from "react-router-dom";
import { Fecha } from './fecha';

export function Movie ({movi}){
    const Url = `https://image.tmdb.org/t/p/w300${movi.poster_path}`;

    const fecha =movi.release_date;
    const anho = fecha.slice(0,4);
    const dia = fecha.slice(8,10);
    const mes = fecha.slice(6,7)

    return(
        <div className={styles.moviCard}>
            <Link to={"/movies/"+ movi.id} >
                <img width={230} height={345} src={Url} alt={movi.title} />
                <p>{movi.title}</p>
                <Fecha anho={anho} dia={dia} mes={mes}/>
            </Link>
        </div>
    )
}