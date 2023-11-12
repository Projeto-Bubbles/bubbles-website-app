import Search from '../Search';
import { Event } from '../common/Event';

function SearchEvents() {
  return (
    <>
      <Search title="Se junte com a galera!" placeholder="Pesquisar eventos...">
        <Event.Card
          title="Festa na Casa das Primas"
          category="Rapaz"
          bubble={{ name: 'Bailão' }}
          address="ai 123"
          image="https://picsum.photos/200/300"
        />
      </Search>
    </>
  );
}

export default SearchEvents;
