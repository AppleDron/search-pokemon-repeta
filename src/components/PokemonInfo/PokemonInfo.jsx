import PokemonDataMarkup from 'components/PokemonDataMarkup/PokemonDataMarkup';
import PokemonError from 'components/PokemonError/PokemonError';
import PokemonPending from 'components/PokemonPending/PokemonPending';
import React, { Component } from 'react';
import { fetchPokemon } from 'services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });

      fetchPokemon(this.props.pokemonName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  };

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Type name of pokemon</div>;
    }

    if (status === 'pending') {
      return <PokemonPending pokemonName={this.props.pokemonName} />;
    }

    if (status === 'resolved') {
      return <PokemonDataMarkup pokemon={pokemon} />;
    }

    if (status === 'rejected') {
      return <PokemonError message={error.message} />;
    }
  }
}
