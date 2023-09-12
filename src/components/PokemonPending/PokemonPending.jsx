import { ImSpinner } from 'react-icons/im';
import pendingImage from './pending.png';
import PokemonDataMarkup from 'components/PokemonDataMarkup/PokemonDataMarkup';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonPending({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      <PokemonDataMarkup pokemon={pokemon} />
    </div>
  );
}
