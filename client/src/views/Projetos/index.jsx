import React from 'react';
import './projetos.css';
import biblioteca from '../../img/biblioteca.png';
import NP from '../../img/NP.png';
import wms from '../../img/wms.png'
import portfolio from '../../img/portfolio.png'

function index() {
  return (
    <div>
    <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><b>Gerenciador de biblioteca</b></h5>
              <p class="card-text">Aplicação feita no netbeans ultilizando o JAVA, projeto simples para aplicar as tecnicas que aprendi no decorrer do curso tecnico. </p>
               <img class="img-small" src={biblioteca} alt="" />
              
              <a href="https://github.com/Caldeiraa/Biblioteca" class="btn btn-primary" target="_blank" >Ver Código</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><b>NoPrecinho</b></h5>
              <p class="card-text">Sistema para comparar preços em diferentes mercados. Recursos ultilizados Node, React e Sql. Projeto feito para a entrega do TCC do curso tecnico</p>
              <img class="img-small" src={NP} alt="" />
              <a href="https://github.com/Caldeiraa/NPfinal" class="btn btn-primary" target="_blank">Ver Código</a>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><b>WMS-SENAI</b></h5>
              <p class="card-text">WMS-Senai é um sistema desenvolvido em JAVA puro e o banco de dados MYSQL   </p>
              <img class="img-small" src={wms} alt="" />
              <a href="https://github.com/Caldeiraa/WMS_SENAI" class="btn btn-primary" target="_blank">Ver Código</a>
              
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><b>Portfolio</b></h5>
              <p class="card-text">Desenvolvido com HTML5, CSS3, JavaScript e React para apresentar meus projetos e habilidades em desenvolvimento web de forma moderna. </p>
              <img class="img-small" src={portfolio} alt="" />
              <a href="https://github.com/Caldeiraa/WMS_SENAI" class="btn btn-primary" target="_blank">Ver Código</a>
              
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default index
