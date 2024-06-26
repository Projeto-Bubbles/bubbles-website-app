import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../components/common/Sign/SignIn';
import Account from '../components/pages/Account';
import Feed from '../components/pages/Feed';
import Institutional from '../components/pages/Institutional';
import { MyBubbles } from '../components/pages/MyBubbles';
import SearchBubbles from '../components/pages/SearchBubbles';
import SearchEvents from '../components/pages/SearchEvents';
import SelectionBubbles from '../components/pages/SelectionBubbles';
import SignPage from '../components/pages/SignPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Institutional />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/selection" element={<SelectionBubbles />} />
          <Route path="/bubbles" element={<SearchBubbles />} />
          <Route path="/events" element={<SearchEvents />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/my-bubbles" element={<MyBubbles />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
