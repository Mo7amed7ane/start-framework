import logo from './logo.svg';
import './App.css';
import  Home from './Home/Home'
import  About from './About/About'
import  Contact from './Contact/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 import Layout from './Layout'


function App() {

  const routes = createBrowserRouter([
{ path: '', element: <Layout></Layout>, children:[
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '', element: <Home /> },
  { path: '*', element: <h1 className='text-center'>Page not found 404</h1> },
]}
  ])
 
  return (
   
   <div>
  
<RouterProvider  router={routes}/>

   </div>
 
  );
}

export default App;
