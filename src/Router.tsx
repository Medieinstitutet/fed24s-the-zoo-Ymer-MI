import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import { animalsLoader } from './loaders/aminalsLoader'
import { Layout } from './pages/Layout'
import { Animals } from './pages/Animals'
import { AnimalPresentation } from './pages/AnimalPresentation'
import { Error } from './components/Error'
import { Loading } from './components/Loading'

export const router = createBrowserRouter([
    {
        path: '/',
        loader: animalsLoader,
        element: <Suspense fallback={ <Loading /> }>
                    <Layout />
                </Suspense>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Animals />
            },
            {
                path: '/:id',
                element: <AnimalPresentation />
            }
        ]
    }
])