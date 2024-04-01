'use client'
import '../Header/Header.css'
import Image from 'next/image';
import Link from 'next/link';
import Igor from '../images/Igor.png'
import Bia from '../images/Bia.png'
import Matheus from '../images/Matheus.png'
import '../Integrantes/Integrantes.css'

const Integrantes = () =>{
return(
    <>
       
       <section className='integrantes-box'>
            <div className='integrantes'>
            <Image className='integrantes-imagens' src={Igor} alt='Foto igor'/>
                <p>Igor Mendes Oviedo</p>
                <p>RM: 553434</p>
            </div>

            <div className='integrantes'>
            <Image className='integrantes-imagens' src={Bia} alt='Foto Bia'/>
                <p>Beatriz Silva</p>
                <p>RM: 552600</p>
            </div>

            <div className='integrantes'>
            <Image className='integrantes-imagens' src={Matheus} alt='Foto Matheus'/>
                <p>Matheus Rodrigo</p>
                <p>RM: 553180</p>
            </div>
       </section>


    </>
)
}

export default Integrantes;