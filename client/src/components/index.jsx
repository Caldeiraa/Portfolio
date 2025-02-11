import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function index() {
  return (
  <div>
    <div class="navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="navbar-container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link" href='/' >HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Projetos">Projetos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contatos">Contato</a>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <a href="https://github.com/Caldeiraa" target="_blank" class="btn btn-outline-light btn-lg">
              <i class="fab fa-github"></i>
            </a>
          </div>
          
          <div class="e-flex">
            <a href="https://www.linkedin.com/in/murilo-caldeira-sousa-790581277/" target="_blank" class="btn btn-outline-light btn-lg">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>

  </div>
  )
}

export default index
