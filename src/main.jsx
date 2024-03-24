
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
import Blog from './pages/Blog';
import Content from './components/Content';
import Author from './components/Author';
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
      element:<Blogs></Blogs>,
      loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
    },
    {
      path:"/blog/:id",
      element:<Blog></Blog>,
      loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
      children:[
        {
          index :true,
          element:<Content></Content>,
          loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        },
        {
          path:"author",
          element:<Author></Author>,
          loader:({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        },
      ]
      
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
