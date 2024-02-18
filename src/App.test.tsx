import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ErrorBanner from './components/errorBanner/ErrorBanner';
import JokeHeader from './components/jokeHeader/JokeHeader';

test('renders parent element', () => {
  render(<App />);
  const parentComponent = screen.getByTestId('parent');
  expect(parentComponent).toBeInTheDocument();
});

test('if error is present, render Error Banner Component', () => {
  render(<ErrorBanner isLoading={false} />); 
  const errorBanner = screen.getByTestId('error-banner'); 
  expect(errorBanner).toBeInTheDocument();
}); 

test('Joke Header Components displays button', () => {
  render(
    <JokeHeader 
      requestJoke={() => {}}
      resetState={() => {}}
      madeRequest={false}
    />
  );
  const button = screen.getByText('Get A New Random Joke'); 
  expect(button).toBeInTheDocument();
}); 

test('Joke Header Components displays link', () => {
  render(
    <JokeHeader 
      requestJoke={() => {}}
      resetState={() => {}}
      madeRequest={false}
    />
  );
  const link = screen.getByText('View API Docs'); 
  expect(link).toBeInTheDocument();
}); 



