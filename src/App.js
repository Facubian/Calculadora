import Calculadora from './Componentes/Calculadora';
import "./App.css";
import imgInsta from "./Imagenes/icono-instagram.png";
import imgLink from "./Imagenes/linkedin.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculadora/>
      </header>

      <footer className="App-footer">
        
        <table className="tabla">
          <tr>
            <th>Contacto</th>
            <th>Telefono</th>
            <th>Instagram</th>
            <th>Linkedin</th>
          </tr>
          <tr>
          </tr>
          
          <tr>
            <td>Facundo Bianchi</td>
            <td>+54 11 59386721</td>
            <td>
              <a href="https://www.instagram.com/facubian/">
                <img src={imgInsta} alt="...\Imagenes\linkedin.png"/>
              </a>
            </td>
            <td>
              <a href='https://www.linkedin.com/in/facundo-bianchi-539137256/'>
                <img src={imgLink} alt='...\Imagenes\linkedin.png'/>
              </a>
            </td>
          </tr>

        </table>
      
      </footer>
    </div>
  );
}

export default App;