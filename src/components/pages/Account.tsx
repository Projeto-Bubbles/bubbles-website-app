import Navbar from '../common/Navbar';
import Profile from '../common/Profile';

function Account() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cover flex items-start justify-center ">
        <div className="mt-24 w-3/4 flex items-center flex-col">
          <Profile />
        </div>
      </main>
    </>
  );
}

export default Account;
