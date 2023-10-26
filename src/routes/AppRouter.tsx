import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Institutional from '../components/pages/Institutional';
import SelectionBubbles from '../components/pages/SelectionBubbles';
import Feed from '../components/pages/Feed';
import Events from '../components/pages/Events';
import Form from './../components/pages/Form';
import Login from '../components/common/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Institutional />} />
          <Route path="feed" element={<Feed />} />
          <Route path="events" element={<Events />} />
          <Route path="selection" element={<SelectionBubbles />} />
          <Route path="cep" element={<Form />} />
          <Route path="sign-in" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
