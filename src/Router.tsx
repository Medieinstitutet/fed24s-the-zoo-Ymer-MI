import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Error } from './components/Error'
import { Animals } from './components/Animals'
import { animalsLoader } from './loaders/aminalsLoader'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        loader: animalsLoader,
        children: [
            {
                path: '/',
                element: <Animals />
            },
            /* {
                path: '/:id',
                element: < />
            } */
        ]
    }
])