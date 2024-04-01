'use client'
import '../Header/Header.css'
import Image from 'next/image';
import Link from 'next/link';
import logo_sales from '../images/salesforcelogo.png';
import logo from '../images/Logo.png'

const Header = () =>{
return(
    <>
       
       <header>
            <nav className='navegacao-header'> 
                <div className='logo-header'>
                <Image className='sales_logo' src={logo} alt='Logo Sales Force'/>

                </div>
                <div className='nav-header'>
                    <ul>
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/Produtos">Produtos</Link></li>
                        <li><Link href="/Historia">Nossa história</Link></li>
                        <li><Link href="/">Fale Conosco</Link></li>
                        <li><Link href="/Integrantes">Integrantes</Link></li>
                    </ul>
                </div>
            </nav>
       </header>

    </>
)
}

export default Header;