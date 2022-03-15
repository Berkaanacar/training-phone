import logo from './logo.svg';
import './App.css';
const axios = require('axios');

function App() {
  const name = "Net";
  const surname = "Adım";
  const api = axios.get('https://betametre.com/api')
      .then(function (response) {
        // handle success
        console.log(response);
        return response;
      })
      .catch(function (error) {
        // handle error
          console.log(error);
      })
      .then(function () {
        // always executed
      });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name} {surname}
            {api.statusCode}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
