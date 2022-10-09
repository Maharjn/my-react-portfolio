import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: '/contact',
      element: <Contact/>,
      
    },
    {
      path: '/portfolio',
      element: <Portfolio/>,
      
    },
  ]);

  return (
    <div>



      <RouterProvider router={router} />


    </div>
  );
}

export default App;