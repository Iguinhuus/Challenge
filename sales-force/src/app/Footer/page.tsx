'use client'

import Image from 'next/image';
import Link from 'next/link';
import logo_sales from '../images/salesforcelogo.png';
import logo from '../images/Logo.png'
import '../Footer/Footer.css'


const Footer = () =>{
return(
    <>
       <footer>
            <p>
            Salesforce Brasil, Av. Jornalista Roberto Marinho, 85
            </p>
            <p>
             – 14º andar – Cidade Monções,
            </p>
            <p>
            São Paulo – SP, 04575-000 Brasil.
            </p>
       </footer>
       
    </>
)
}

export default Footer;