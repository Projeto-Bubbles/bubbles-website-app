import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../components/common/Sign/SignIn';
import Events from '../components/pages/Events';
import Feed from '../components/pages/Feed';
import Institutional from '../components/pages/Institutional';
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
          <Route path="feed" element={<Feed />} />
          <Route path="events" element={<Events />} />
          <Route path="selection" element={<SelectionBubbles />} />
          <Route path="search">
            <Route path="bubbles" element={<SearchBubbles />} />
            <Route path="events" element={<SearchEvents />} />
          </Route>
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<SignPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
