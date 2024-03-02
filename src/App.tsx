import { Outlet } from 'react-router-dom';

function App() {
  const data = {
    id: 1,
    name: 'Chico Bueno',
    username: 'chico@123',
    email: 'chico@gmail.com',
  };

  localStorage.setItem('user', JSON.stringify(data));

  return (
    <>
      <div className="w-screen h-screen bg-[url('../src/assets/bubbles-effect.png')] bg-cover bg-repeat-y">
        <Outlet />
      </div>
    </>
  );
}

export default App;
