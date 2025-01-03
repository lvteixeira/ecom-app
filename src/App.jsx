import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HelloWorld from './components/view/HelloWorld.jsx';
import LandingPage from './components/view/LandingPage.jsx';
import SignInPage from './components/view/SignInPage.jsx';
import NavbarCustom from './components/layout/NavbarCustom.jsx';
//import ShopPage from './components/view/ShopPage.jsx';
//import CartPage from './components/view/CartPage.jsx';
import './index.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const routes = [
    {
      path: '/hello-world',
      component: HelloWorld,
    },
    { 
      path: '/', 
      component: LandingPage,
    },
    { 
      path: '/signin', 
      component: SignInPage,
    },
  ]
  /*
  const routes = [
    { 
      path: '/index', 
      component: LandingPage,
    },
    { 
      path: '/signin', 
      component: SignInPage,
    },
    { 
      path: '/shop', 
      component: ShopPage,
    },
    { 
      path: '/cart', 
      component: CartPage,
    },
  ]
  */

  return(
    <>
      <NavbarCustom />
      {
        <Routes>
          {
            routes.map((route, index) => {
              return <Route key={`route${index}`} 
                path={route.path} 
                element={<route.component />} />
            })
          }
        </Routes>
      }
    </>
  );
}

export default App;
