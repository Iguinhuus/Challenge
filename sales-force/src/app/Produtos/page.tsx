'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo_sales from '../images/salesforcelogo.png';
import logo from '../images/Logo.png'
import '../Produtos/Produtos.css'
import BoxComponent from '../BoxComponent/page';

const Produtos = () =>{
return(
    <>
       <section className='produtos-container'>
       <BoxComponent title="SALES CLOUD" subtitle="Reduza os custos e aumente a produtividade. Eficiência máxima com automação, dados e inteligência melhores. Como? Com automação da força de vendas impulsionada por IA." />
       <BoxComponent title="DATA CLOUD" subtitle="Uma plataforma de dados em hiperescala integrada à Salesforce. Ative todos dados dos seus clientes nos diversos apps da Salesforce com o Data Cloud. Capacite as equipes a envolver os clientes, em cada ponto de contato, com insights relevantes e dados contextuais no fluxo do trabalho." />
       </section>
       

    </>
)
}

export default Produtos;