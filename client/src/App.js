import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/index';
import Portfolio from './views/Portfolio/index';
import Projetos from './views/Projetos/index';
import Contatos from './views/Contato/index';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Portfolio/>}/>
     <Route path='/projetos' element={<Projetos/>}/>
     <Route path='/contatos' element={<Contatos/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
