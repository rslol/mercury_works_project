import React from 'react'; 
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './jokeHeader.css';

interface Props {
  requestJoke: () => void;
  resetState: () => void;
  madeRequest: boolean;
}

const JokeHeader: React.FC<Props> = ({ requestJoke, resetState, madeRequest }) => {
  return (
    <>
      <Grid container spacing={2} style={{ height: '20vh' }} alignContent={'center'} display={'flex'}>
        <Grid item sm={12} md={6}>
          <Button variant='contained' color='success' onClick={!madeRequest ? requestJoke : resetState} className='buttonStyles'>
            Get A New Random Joke
          </Button>
        </Grid>
        <Grid item sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Link href="https://mwks-joke-service.azurewebsites.net/swagger/index.html" variant="body2" target="_blank">
            View API Docs
          </Link>
        </Grid>
      </Grid>
    </>
  )
}; 

export default JokeHeader; 