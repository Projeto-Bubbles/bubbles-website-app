import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Institutional from '../components/pages/Institutional';
import SelectionBubbles from '../components/pages/SelectionBubbles';
import Feed from '../components/pages/Feed';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Institutional />,
        // children: [{ path: '/sign', element: <Sign /> }],
      },
      {
        path: 'bubbles',
        element: <Feed />,
        children: [
          {
            path: 'selection',
            element: <SelectionBubbles />,
          },
        ],
      },
    ],
  },
]);
