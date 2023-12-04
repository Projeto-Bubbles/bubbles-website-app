import { Outlet } from 'react-router-dom';

function App() {
  const user = {
    id: 1,
    name: 'Baianinho Doce',
    username: 'baianod',
    email: 'baianin@gmail.com',
    image: 'https://source.unsplash.com/random/250x250/?person',
  };

  localStorage.setItem('user', JSON.stringify(user));
  return (
    <>
      <div className="w-screen h-screen bg-[url('../src/assets/bubbles-effect.png')] bg-cover bg-repeat-y">
        <Outlet />
      </div>
    </>
  );
}

export default App;
