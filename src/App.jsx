import { Route, Routes } from 'react-router-dom';
import HelloWorld from './components/view/HelloWorld.jsx';

const App = () => {
  const routes = [
    { 
      path: '/hello-world', 
      component: HelloWorld,
    },
  ]

  return(
    <>
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