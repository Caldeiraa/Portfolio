import React from 'react'
import foto from '../../img/foto.jpeg'
import './Portifolio.css'
function index() {
  return (
    <div>
          <div class="container text-center">
            <div class="row align-items-start">
           
            <div class="col">
            <img class="img" src={foto} alt="" />
                <h1>Murilo Caldeira Sousa</h1>
                <p>Desenvolvedor Full Stack </p>
            </div>
           
            <div class="col">
                <h1><b>Conhecimentos</b></h1>
                <p> Javascript | Java | SQL | HTML5 | CSS3 | Node.Js | React.Js | JAVA | C++ | </p>
                
                <h1><b>Experiências</b></h1>
                <p>2024 - 2024 <b>Auxiliar de escritório</b></p>
                <p>2024 - 2025 <b>Operador de Logística</b></p>
            </div>
            
            <div class="col">
                <h1><b>Sobre Mim</b></h1>
                <p>Olá, sou Murilo Caldeira Sousa, tenho 19 anos e sou formado como técnico em Desenvolvimento de Sistemas pelo SENAI. 
                Em fevereiro de 2025, iniciarei minha graduação em Análise e Desenvolvimento de Sistemas, com o objetivo de me especializar em Análise de Dados.</p>  

                <p>Estou em busca de uma vaga de estágio na área de tecnologia, onde pretendo aplicar meus conhecimentos em SQL, JavaScript, Java, Node.js, React e HTML5/CSS3,
                além de adquirir novas experiências para crescer profissionalmente.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default index
