import ReactDOM from 'react-dom/client';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/home/Home'
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Project from './components/project/Project';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Experience',
        element: <Experience />,
      },
      {
        path: '/Project',
        element: <Project />,
      },
      {
        path: '/Services',
        element: <Services />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
