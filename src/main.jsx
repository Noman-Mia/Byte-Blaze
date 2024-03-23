
import ReactDOM from 'react-dom/client'
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Bookmarks from './pages/Bookmarks';
import MainLayout from './layout/MainLayout';
const router = createBrowserRouter([
 {
  path:'/',
  element:<MainLayout></MainLayout>,
  children:[
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path:"/blogs",
      element:<Blogs></Blogs>
    },
    {
      path:"/bookmarks",
      element:<Bookmarks></Bookmarks>
    }
  ]
 }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
