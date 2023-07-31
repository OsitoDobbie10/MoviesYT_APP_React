import {createBrowserRouter,RouterProvider, Navigate} from 'react-router-dom';
import Layaout from './Componets/Layaout';
import Inicio from './Componets/Inicio';
import FiltroHome from './Componets/FiltroHome';
import FiltroHome2 from './ComponentArray2/FiltroHome2';
import FiltroHome3 from './ComponentArray3/FiltroHome3';
import FiltroHome4 from './ComponentArray4/FiltroHome4';
import Peliculas from './Componets/Peliculas';
import FiltroPeliculas from './Componets/FiltroPeliculas';
import Series from './Componets/Series';
import FiltroSerie from './Componets/FiltroSerie';
import Actores from './Componets/Actores';
import { FiltroPerson } from './Componets/FiltroPerson';
import './App.css';
import ErrorRoter from './Componets/ErrorRoter';
import {loader as LoaderListTV} from './CustomHooks/CustomSeries'
import {loader as LoaderListMovie} from './CustomHooks/PeliculasCustom'
import Item5 from './ComponentArray5/Item5';
import Item6 from './ComponentArray6/Item6';
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layaout/>,
      errorElement: <Navigate to={'/'}/>,
      children: [
        { index: true,
          element: <Inicio/>,
          errorElement: <ErrorRoter/>
        },
        {
          path: '/Home/:homeId/objeto',
          element:<FiltroHome/>
        },
        {
          path: '/Home/:homeId/objeto2',
          element:<FiltroHome2/>
        },
        {
          path: '/Home/:homeId/objeto3',
          element:<FiltroHome3/>
        },
        {
          path: '/Home/:homeId/objeto4',
          element:<FiltroHome4/>
        },
        {
          path: '/Home/:homeId/objeto5',
          element:<Item5/>
        },
        {
          path: '/Home/:homeId/objeto6',
          element:<Item6/>
        }
      ]
    },
    {
      path: '/Movies',
      element:<Layaout/>,
      errorElement: <Navigate to={'/'}/>,
      children:[
        { index: true,
          element: <Peliculas/>,
          loader:LoaderListMovie,
          errorElement: <ErrorRoter/>
        },
        {
          path: '/Movies:moviesId/objeto',
          element: <FiltroPeliculas/>
        }
      ]
    },
    {
      path: '/TV',
      element: <Layaout/>,
      errorElement: <Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element: <Series/>,
          loader:LoaderListTV,
          errorElement: <ErrorRoter/> 
        },
        {
          path: '/TV:seriesId/objeto',
          element:<FiltroSerie/>
        }
      ]
    },
    {
      path:'/Actors',
      element:<Layaout/>,
      errorElement:<Navigate to={'/'}/>,
      children:[
        {
          index:true,
          element:<Actores/>,
          errorElement: <Navigate to={'/'}/>
        }
        ,
        {
          path:'/Actors:personId/objeto',
          element:<FiltroSerie/>
        }
      ]
    }
  ])
  return (
   <RouterProvider router={router}/>
  )
}

export default App
