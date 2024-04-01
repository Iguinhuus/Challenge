'use client'
import Image from 'next/image';
import Link from 'next/link';
import '../Formulario/Formulario.css'


const Formulario = () =>{
return(
    <>
       
       <section className='container_conta'>
                    <form className='forms_conta'>
                        <h2 className='forms_title'>Nos envie a sua dúvida, elogio ou reclamação</h2>
                        <label> Nome:
                            <input type="text" name="nome" />
                        </label>
                        <label> Sobrenome:
                           <input type="text" name='sobrenome' />
                        </label>
                        <label> Cargo:
                           <input type="text" name='cargo' />
                        </label>
                        <label> Email Corporativo:
                           <input type="email" name='Email Corporativo' />
                        </label>
                        <label> Telefone:
                           <input type="tel" name='Telefone' />
                        </label>
                        <label> Nome da empresa:
                           <input type="text" name='Nome da empresa' />
                        </label>
                        <label> Seguimento:
                           <input type="text" name='Seguimento' />
                        </label>
                        <label> Tamanho da empresa:
                           <input type="text" name='Tamanho da empresa' />
                        </label>
                        <label> País:
                           <input type="text" name='País' />
                        </label>
                        <label> Comentário:
                           <input type="text" name='comentario' />
                        </label>
                        
                      <input className='botao_enviar' type="submit" placeholder='Enviar'/>
                    </form>
           </section>   

    </>
)
}

export default Formulario;