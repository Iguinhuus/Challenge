'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo_sales from '../images/salesforcelogo.png';
import logo from '../images/Logo.png'
import '../Produtos/Produtos.css'
import BoxComponent from '../BoxComponent/page';


const Historia = () =>{
return(
    <>
       <section className='produtos-container'>
       <BoxComponent title="Historia" subtitle="Em 1999, quatro fundadores da Salesforce, trabalhando lado a lado em um pequeno apartamento de São Francisco, lançaram um sistema de gerenciamento de relacionamento com o cliente (CRM) com uma abordagem inovadora. Todo o software e os dados críticos do cliente seriam hospedados na Internet e disponibilizados como um serviço de assinatura. Esse modelo pioneiro de “software como serviço”, ou SaaS, se espalhou rapidamente pelo setor de tecnologia." />
       <BoxComponent title="Nossos Valores" subtitle="Os valores da empresa são baseados em confiança, sucesso do cliente, inovação, igualdade e na sustentabilidade." />
       </section>
       
       

    </>
)
}

export default Historia;