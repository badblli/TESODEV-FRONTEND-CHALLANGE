import { useRoutes } from 'react-router-dom';
// layouts
// import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Landing from './pages/Landing';
import Results from './pages/Results';
import Add from './pages/Add';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Landing />,
            // children: [
            //     { path: '/', element: <Navigate to="/search-app" /> },
            //     { path: 'results', element: <Results /> },
            //     { path: 'Add', element: <Add /> },
            // ],
        },
        {
            path: '/results',
            element: <Results />,
        },
        {
            path: '/add-recorrd',
            element: <Add />,
        },
        // { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
