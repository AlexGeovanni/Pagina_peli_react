import './controllPages.css'
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from 'react-icons/ai'

export default function ControllPages({pages,nextPages,resetOrEndPages}){

    const next = valor =>{
        nextPages(pages+valor)
    }

    return(
        <section className='conteiner'>
            <div className='controlls_pages'>
                <p className='info_pages'>pagina: <span>{pages}</span> de <span>500</span></p>
                {
                    pages > 4 &&  <p  onClick={()=>resetOrEndPages(1)}><AiOutlineDoubleLeft  className='icon' /> Primera </p>
                }
                <AiOutlineDoubleLeft onClick={()=>next(-1)}  className='icon' />
                <p onClick={()=>next(0)} >{pages}</p>
                {
                    pages<499 &&
                    <>
                    <p onClick={()=>next(1)} >{pages+1}</p>
                    <p onClick={()=>next(2)} >{pages+2}</p>
                    <p >...</p>
                    </>
                }
                <AiOutlineDoubleRight onClick={()=>next(1)} className='icon' />
                <p onClick={()=>resetOrEndPages(500)} className='p_ultima'> Ultima <AiOutlineDoubleRight className='icon' /></p>
            </div>
        </section>
    )
}