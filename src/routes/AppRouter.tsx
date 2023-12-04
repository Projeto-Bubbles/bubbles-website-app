import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Institutional from '../components/pages/Institutional';
import SelectionBubbles from '../components/pages/SelectionBubbles';
import Feed from '../components/pages/Feed';
import Events from '../components/pages/Events';
import Login from '../components/common/Sign/SignIn';
import SearchBubbles from '../components/pages/SearchBubbles';
import SearchEvents from '../components/pages/SearchEvents';
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
          <Route path="sign-in" element={<SignPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
