import { createBrowserRouter } from 'react-router-dom';
import { HomePage, AccessForm, ClientError } from '../pages';
import RootLayout from '../layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ClientError />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: '/signin',
    element: <AccessForm endpoint='SignIn' />
  },
  {
    path: '/signup',
    element: <AccessForm endpoint='SignUp' />
  }
]);

export default router;
