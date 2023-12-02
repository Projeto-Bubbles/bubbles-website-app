import { Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';

function App() {
  const previousPage = localStorage.getItem('previousPage') ?? '/';

  const user = {
    name: 'Baianinho Doce',
    username: '@baianod',
    image: 'https://source.unsplash.com/random/250x250/?person',
  };

  localStorage.setItem('user', JSON.stringify(user));

  return (
    <>
      <Navbar redirectPage={previousPage} />
      <div className="w-screen h-screen bg-[url('../src/assets/bubbles-effect.png')] bg-cover bg-repeat-y">
        <Outlet />
      </div>
    </>
  );
}

export default App;
