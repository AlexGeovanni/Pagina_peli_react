import {AiOutlineHeart,AiOutlineStar} from "react-icons/ai"
import {IoBookmarkOutline,IoPlaySharp} from "react-icons/io5"

import "./accionIcon.css"

export const AccionIcon=()=>{
    return(
        <div className="content-acccionesIcon">
            <div> 
                <AiOutlineHeart />
            </div>
            <div> 
                <IoBookmarkOutline /> 
            </div>
            <div> 
                <AiOutlineStar /> 
            </div>
            <div className="video">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <IoPlaySharp />  <p>Reproducir trailer</p>
                </a>
            </div>
        </div>
    )
}