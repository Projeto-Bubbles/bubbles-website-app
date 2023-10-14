import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Institutional from '../components/pages/Institutional';
import SelectionBubbles from '../components/pages/SelectionBubbles';
import Feed from '../components/pages/Feed';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Institutional />} />
          <Route path="feed" element={<Feed />} />
          <Route path="selection" element={<SelectionBubbles />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
