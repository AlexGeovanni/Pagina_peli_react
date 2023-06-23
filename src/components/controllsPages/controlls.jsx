import './controllPages.css'
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from 'react-icons/ai'

export default function ControllPages({pages,nextPages}){
    return(
        <section className='conteiner'>
            <div className='controlls_pages'>
                <p className='info_pages'>pagina: <span>{pages}</span> de <span>500</span></p>
                {
                    pages > 4 &&  <p> <AiOutlineDoubleLeft className='icon' /> Primera </p>
                }
                <AiOutlineDoubleLeft  className='icon' />
                <p>{pages}</p>
                <p>{pages+1}</p>
                <p>{pages+2}</p>
                <p>{pages+3}</p>
                <p>...</p>
                <AiOutlineDoubleRight onClick={nextPages} className='icon' />
                <p className='p_ultima'> Ultima <AiOutlineDoubleRight className='icon right_click' /></p>
            </div>
        </section>
    )
}