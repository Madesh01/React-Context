import React from 'react'

import{BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact'
import Users from './Pages/Users/Users'
import About from './Pages/About'
import Error from './Pages/Error'
import Navbar from './Components/Navbar/Navbar'
import User from './Pages/User'
import{GlobalProvider} from './Context/GlobalStat '

const App = () => {
  return (
    <GlobalProvider>
<BrowserRouter>
<Navbar />
<Routes>
    <Route path="/"  element={<Home />} /> 
    <Route path="/contact"  element={<Contact />} />
    <Route path="/users" element={<Users />} />
    <Route path="/about" element= {<About /> } /> 
    <Route path="/user/:username" element={ <User />} />
    <Route path="*" element={<Error />} />
</Routes>
</BrowserRouter>
</GlobalProvider>
  );
};

export default App