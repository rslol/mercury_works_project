import React, { useState, useEffect } from 'react'; 
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import LoadingText from '../loadingText/LoadingText';

interface Props {
  isLoading?: boolean; 
  jokeData: {
    joke: string, 
    punchLine: string
  };
  madeRequest: boolean;
}

const DisplayJoke: React.FC<Props> = ({ isLoading, jokeData, madeRequest }) => {
  const [displayPunchline, setDisplayPunchline] = useState<boolean>(false);
  const [intialLoad, setInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    setDisplayPunchline(false);
  }, [isLoading]);

  const BlockJoke = styled.blockquote`
    position: relative; 
    margin: 0; 
    &:before {
      content: open-quote; 
      position: absolute; 
      color: grey; 
      font-size: 10rem; 
      top: -45px;
      left: -15%; 
      z-index: -1;
    }
  `; 

  const BlockPunchline = styled.blockquote`
    position: relative; 
    margin: 0;
    &:after {
      content: close-quote;
      position: absolute; 
      color: grey;
      font-size: 10rem; 
      bottom: 45px; 
      right: -3%;
      z-index: -2;
      height: 100%;
    }
  `;

  const textStyles = {
    fontWeight: '400'
  }

  return (
    <>
      <Grid 
        container
        direction="row"
        justifyContent='center'
        alignItems='center'
      >
        <Grid item sm={6}>
          {intialLoad && <LoadingText doneLoading={() => setInitialLoad(false)}/>}
          {!isLoading && madeRequest && !intialLoad &&
            <BlockJoke>
              <h2 style={textStyles}>{jokeData.joke}</h2>
            </BlockJoke>
          }
          {madeRequest && <Button variant="contained" color="primary" onClick={() => setDisplayPunchline(!displayPunchline)}>{displayPunchline ? 'Hide Punchline' : 'Show Punchline'}</Button>}
        </Grid>
      </Grid>
      <Grid 
        container
        direction="row"
        justifyContent='center'
        alignItems='center'
      >
        <Grid item sm={6}>
          {displayPunchline && 
            <BlockPunchline>
              <h2 style={textStyles}>{jokeData.punchLine}</h2>
            </BlockPunchline>
          }
        </Grid>
      </Grid>
    </>
  )
};

export default DisplayJoke;