import { Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-[url('../src/assets/bubbles-effect.png')] bg-cover">
        <Outlet />
      </div>
    </>
  );
}

export default App;
