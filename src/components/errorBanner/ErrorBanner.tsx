import React from 'react';
import Alert from '@mui/material/Alert'; 
import Grid from '@mui/material/Grid';

interface Props {
  isLoading: boolean
}
const ErrorBanner: React.FC<Props> = ({ isLoading }) => {
  return !isLoading ? (
    <Grid 
      container
      direction="row"
      justifyContent='center'
      alignItems='center'
      data-testid="error-banner"
    >
      <Grid item sm={6}>
        <Alert severity='error'>Oops! Something went wrong, please try again</Alert>
      </Grid>    
    </Grid>
  ) : <></>
}; 

export default ErrorBanner;