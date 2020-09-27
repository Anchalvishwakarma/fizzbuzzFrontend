import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './component/List';
import withListLoading from './component/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });

    var config = {
      method: 'get',
      url: 'http://localhost:3100/fizzbuzz/type/1/count/100',
      mode: "no-cors",
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setAppState({ loading: false, fizzBuzz: JSON.parse(response.data) });
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Fizz Buzz</h1>
        <h4>Fizz Buzz frontend Link </h4>
        <h4>Fizz Buzz Backend  Github Link &nbsp;
          <span>
            <a href="https://github.com/Anchalvishwakarma/fizzBuzzaBackend">
               https://github.com/Anchalvishwakarma/fizzBuzzaBackend
            </a>
          </span> 
        </h4>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} fizzBuzz={appState.fizzBuzz} />
      </div>
      <footer>
        <div className='footer'>
          Built by Anchal Vishwakarma
        </div>
      </footer>
    </div>
  );
}
export default App;

