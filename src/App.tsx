import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Container from '@mui/material/Container';
import JokeHeader from './components/jokeHeader/JokeHeader';
import DisplayJoke from './components/displayJoke/DisplayJoke';
import ErrorBanner from './components/errorBanner/ErrorBanner';

type JokeResponse = {
  'joke': string, 
  'punchLine': string, 
  'id': number | null
};

function App() {
  const [jokeResponse, setJokeResponse] = useState<JokeResponse>({
    joke: '', 
    punchLine: '', 
    id: null
  }); 
  const [madeRequest, setMadeRequest] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    handleClick();
  }, [])

  const intialState: JokeResponse = {
    joke: '', 
    punchLine: '', 
    id: null
  };

  const retrieveJoke = async () => {
    try {
      const { data } = await axios.get<JokeResponse>('https://mwks-joke-service.azurewebsites.net/api/joke/random');
      setJokeResponse(data);
      setIsLoading(false);
    } catch (e) {
      setError(true);
      setIsLoading(false);
      console.error(e, "api call error");
    }
  };

  const handleClick = () => {
    setIsLoading(true); 
    retrieveJoke();
    setMadeRequest(true);
  };

  const resetState = () => {
    setMadeRequest(false);
    setJokeResponse(intialState);
    handleClick();
  }

  return (
    <Container className="App" style={{ height: '100vh' }} data-testid="parent">
      <JokeHeader requestJoke={handleClick} resetState={resetState} madeRequest={madeRequest}/>
      <hr />
      {!error && <DisplayJoke isLoading={isLoading} jokeData={jokeResponse} madeRequest={madeRequest}/>}
      {error && <ErrorBanner isLoading={isLoading} />}
    </Container>
  );
}

export default App;
