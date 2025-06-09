import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Error } from './components/Error'
import { Home } from './components/Home'
import { Animals } from './components/Animals'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/animals',
                element: <Animals />
            }
        ]
    }
])