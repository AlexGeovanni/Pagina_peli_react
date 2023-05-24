export const Fecha =(props)=>{
    const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const {anho,mes,dia}=props
    return(
        <p style={{fontSize:"17px",fontWeight:"300" }} >{`${dia} ${meses[mes]} ${anho}`}</p>
    )
}