import { Outlet } from 'react-router-dom';

function App() {
  const user = {
    id: 29,
    username: 'Alex Barrera',
    nickname: 'barre_123',
    email: 'barrera@gmail.com',
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
