import React from 'react';
import './projetos.css';
import biblioteca from '../../img/biblioteca.png';
import NP from '../../img/NP.png';
import wms from '../../img/wms.png';
import portfolio from '../../img/portfolio.png';

function Index() {
  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h5 className="card-title">Gerenciador de biblioteca</h5>
          <p className="card-text">Aplicação feita no NetBeans utilizando JAVA.</p>
          <img src={biblioteca} alt="Biblioteca" />
          <a href="https://github.com/Caldeiraa/Biblioteca" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Código</a>
        </div>

        <div className="card">
          <h5 className="card-title">NoPrecinho</h5>
          <p className="card-text">Sistema para comparar preços em diferentes mercados.</p>
          <img src={NP} alt="NoPrecinho" />
          <a href="https://github.com/Caldeiraa/NPfinal" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Código</a>
        </div>

        <div className="card">
          <h5 className="card-title">WMS-SENAI</h5>
          <p className="card-text">Sistema logístico desenvolvido em Java e MySQL.</p>
          <img src={wms} alt="WMS" />
          <a href="https://github.com/Caldeiraa/WMS_SENAI" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Código</a>
        </div>

        <div className="card">
          <h5 className="card-title">Portfólio</h5>
          <p className="card-text">Desenvolvido com HTML5, CSS3, JavaScript e React.</p>
          <img src={portfolio} alt="Portfolio" />
          <a href="https://github.com/Caldeiraa/portf-lio" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver Código</a>
        </div>
      </div>
    </div>
  );
}

export default Index;
