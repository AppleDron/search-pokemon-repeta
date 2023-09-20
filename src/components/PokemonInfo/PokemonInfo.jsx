import PokemonDataMarkup from 'components/PokemonDataMarkup/PokemonDataMarkup';
import PokemonError from 'components/PokemonError/PokemonError';
import PokemonPending from 'components/PokemonPending/PokemonPending';
import React, { useEffect, useState } from 'react';
import { fetchPokemon } from 'services/pokemon-api';

export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');

    fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <div>Type name of pokemon</div>;
  }

  if (status === 'pending') {
    return <PokemonPending pokemonName={pokemonName} />;
  }

  if (status === 'resolved') {
    return <PokemonDataMarkup pokemon={pokemon} />;
  }

  if (status === 'rejected') {
    return <PokemonError message={error.message} />;
  }
};
