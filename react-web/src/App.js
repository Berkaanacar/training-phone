import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
const axios = require('axios');

function App() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/contact/new', {
            "name": "React Native",
            "phone": "12345"
        })
            .then(function (response) {
                // handle success
                console.log(response.data);
                setUser(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {user.name} {user.surname}
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
