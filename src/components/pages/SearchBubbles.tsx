import Search from '../Search';
import Navbar from '../common/Navbar';

function SearchBubbles() {
  const previousPage = localStorage.getItem('previousPage') ?? '/';
  return (
    <>
      <Navbar isLogged redirectPage={previousPage} />

      <Search
        title="Encontre suas bolhas favoritas aqui"
        placeholder="Pesquisar bolhas..."
      >
        {/* <Bubble.Card /> */}
      </Search>
    </>
  );
}

export default SearchBubbles;
