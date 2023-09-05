import logo from './fit.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>Receitas Fitness</code>  
        </p>
        <a
          className="App-link"
          href="https://www.receiteria.com.br/receitas-fit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Receitas
        </a>
      </header>
    </div>
  );
}

export default App;
