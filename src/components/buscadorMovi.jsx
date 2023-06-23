import styles from '../style/buscador.module.css'
import { useState } from 'react'

import { useNavigate} from 'react-router-dom'; 
/*
    Este hook useNavigate, me permitira cambiar la URL o Ruta de mi pagina, lo cual agrega nuevo parametro lo cual puedo moverme a ese elemento
 */
import useQuery from '../hooks/Params_Url';
import { useEffect } from 'react';

export function BuscaMovi(){
    const [inputText,setInputText] = useState('');
    let history  = useNavigate(); //lo guardamos en un variable
    const search = useQuery();

    useEffect(()=>{
        setInputText(search || "")
    },[search])
    
    function enviarDato(e){
        e.preventDefault();
        if(inputText === '') return
        // agregamos la ruta y luego el valor de busqueda que nosotros escribimos en el campo de texto
        history('/?search='+inputText);
    }
    
    return(
        <form onSubmit={enviarDato} className={styles.conteiner}>
            <div className={styles.searhBox}>
                <input className={styles.searh} 
                type='text' 
                placeholder="Nombre de la pelicula" 
                value={inputText} 
                onChange={ (e) => setInputText(e.target.value)} />

                <button className={styles.btn} >Buscar</button>
            </div>
        </form>
    )
}