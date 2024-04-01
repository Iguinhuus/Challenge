'use client'

import Image from 'next/image';
import Link from 'next/link';
import logo_sales from '../images/salesforcelogo.png';
import logo from '../images/Logo.png'
import '../Inicial/Inicial.css'


const Inicial = () =>{
return(
    <>
       <section className='inicial-container'>
        
            <Link className='link' href="/"><div nav-ball>Últimas Notícias</div></Link>
            
            <Link className='link' href="/Formulario"><div nav-ball>FAQ</div></Link>
            
       </section>
    </>
)
}

export default Inicial;