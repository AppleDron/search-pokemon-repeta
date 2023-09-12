import React from 'react';
import errorImage from './error.jpg';

const PokemonError = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} alt="sadcat" width="240" />
      <p>{message}</p>
    </div>
  );
};

export default PokemonError;
