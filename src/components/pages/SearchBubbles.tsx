import Search from '../Search';
import { Bubble } from './../common/Bubble/index';

function SearchBubbles() {
  return (
    <Search
      title="Encontre suas bolhas favoritas aqui"
      placeholder="Pesquisar bolhas..."
    >
      <Bubble.Card />
    </Search>
  );
}

export default SearchBubbles;
