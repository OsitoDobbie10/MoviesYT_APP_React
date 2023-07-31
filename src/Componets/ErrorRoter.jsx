import {useRouteError} from 'react-router-dom'

const ErrorRoter = () => {
    const error = useRouteError();
  return (
    <div className='space-y-6'>
    <h1 className='text-center text-6xl text-blue-600 font-extrabold mt-20'>
        CRM - Clientes
    </h1>
    <p className='text-center text-3xl'>Hubo un error</p>
    <p className='text-center text-3xl'>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorRoter
