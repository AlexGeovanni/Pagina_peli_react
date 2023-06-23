// const API = "https://api.themoviedb.org/3"

// export const buscar =async (path,setData)=>{
//     const result = await fetch(API + path, {
//         headers: {
//             Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
//             "Content-Type": "application/json;charset=utf-8",
//         },
//     })
//     setData(result.json())
// }

import axios from "axios"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
            "Content-Type": "application/json;charset=utf-8",
        }
});

// funcion recibe una url y una funcion la cual devuelve el resultado
export const getPeliculas= async(url,setData)=>{
    // api.get le pasamos el complemento las urls para ser reutilizable
    const resul = await api.get(url);
    return setData(resul.data);
}


