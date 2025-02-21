import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navbar-container">
        {/* Logo ou Nome do Site */}
        <a className="navbar-brand text-white fw-bold" href="/">
          MeuPortfólio
        </a>

        {/* Botão do Menu Hambúrguer */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Itens da Navbar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Projetos">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contatos">Contato</a>
            </li>
          </ul>

          {/* Links Sociais (Agora centralizados no menu) */}
          <div className="social-links">
            <a href="https://github.com/Caldeiraa" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/murilo-caldeira-sousa-790581277/" 
               target="_blank" 
               rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
