import { BrowserRouter, Router } from 'react-router-dom'
import Header from './component/Header'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About'
import Contact from './component/Contact.jsx'
import User from './component/User.jsx'
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='user/:id' element={<User/>}/>
  
  
        </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
