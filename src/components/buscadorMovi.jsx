import styles from '../style/buscador.module.css'
import { useState } from 'react'

export function BuscaMovi(){
    const [description,setDescription] = useState('');
    
    function enviar(){
        setDescription("")
    }
    return(
        <div className={styles.conteinerBuscar}>
            <input className={styles.searh} type='text' placeholder="Nombre de la pelicula" 
            value={description} 
            onChange={ (e) => setDescription(e.target.value)} />

            <button onClick={enviar} className={styles.btn} >Buscar</button>
        </div>
    )
}