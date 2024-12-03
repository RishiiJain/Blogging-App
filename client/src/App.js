import { useState } from 'react';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

//components
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
  <>
    <Header />
    <Outlet />
  </>
  : <Navigate replace to ='/login' />
}

function App() {

  const [isAuthenticated, isUserAuthenticated ] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{marginTop: 64}}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>} />
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home/>} />
            </Route>
            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated }/>}>
              <Route path='/create' element={<CreatePost/>} />
            </Route>
            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated }/>}>
              <Route path='/about' element={<About />} />
            </Route>
            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated }/>}>
              <Route path='/contact' element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;