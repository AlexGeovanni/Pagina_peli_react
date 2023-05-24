import "./footer.css"

export const Footer=()=>{
    return(
        <footer className="footer">
            <div className="redes">
                <a href="https://www.github.com/AlexGeovanni" target="_blank" rel="noreferrer">
                <img src="/img/github-mark-white.png" alt="" />
                </a>
                <a href="https://mx.linkedin.com/in/alex-geovanni-diaz-dwf" target="_blank" rel="noreferrer" >
                <img src="/img/linkedin.png" alt="" />
                </a>
            </div>
            <div className="copy">
                <p>&copy; Alex Geovanni | | 2022</p>
                <p>Este proyecto fue realizado con un Api con el fin de poner el precticas mis conocimientos</p>
            </div>
        </footer>
    )
}