import React from 'react';
import './contato.css';

function Contato() {
  return (
    <div className="quadrado">
      <div className="contatos">
        <h2>Meus Contatos</h2>
        <ul>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/27996276436" target="_blank" rel="noopener noreferrer">(27) 9 9627-6436</a></li>
          <li><strong>E-mail:</strong> <a href="mailto:mirilo.bxd@gmail.com">mirilo.bxd@gmail.com</a></li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/murilo_bxd/" target="_blank" rel="noopener noreferrer">@Caldeira</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/murilo-caldeira-sousa-790581277/" target="_blank" rel="noopener noreferrer">linkedin.com/in/Murilo Caldeira</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/Caldeiraa" target="_blank" rel="noopener noreferrer">github.com/Caldeiraa</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contato;
