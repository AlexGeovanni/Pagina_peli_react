import { useLocation } from 'react-router-dom'; 
/* 
    useLocation para obtener la ubicacion de la ruta, ser útil para realizar algún efecto secundario siempre que cambie la ubicación actual o URL.
*/

const useQuery=()=>{
    // Esta es un forma de descifrar las variables que se pasan de consulta
    // URLSearchParams nos parsea todo para poder sacar directamente el valor.
    return new URLSearchParams(useLocation().search).get('search');
}


export default useQuery;