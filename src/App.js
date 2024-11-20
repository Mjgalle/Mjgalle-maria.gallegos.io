import logo from './logo.svg';
import welcomeBack from './assets/icons/welcome-back.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={welcomeBack} className="welcome-png" alt="Welcome icons created by Freepik - Flaticon" />
        <p>
          Welcome to my Personal Website :)
          <br>
          </br>
          Please, <a href="">Enter</a>
        </p>
      </header>
    </div>
  );
}

export default App;
