import { Outlet, useLoaderData } from 'react-router'
import { useReducer } from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import type { Animal } from '../models/Animal'
import { AnimalsContext } from '../context/AnimalsContext';
import { AnimalsReducer } from '../reducers/AnimalsReducer';

export const Layout = () => {
    const [animals, dispatch] = useReducer(AnimalsReducer, useLoaderData<{animals: Animal[]}>().animals)

    return <body>
        <AnimalsContext.Provider value={{ animals, dispatch }}>
        <Header />
            <main className='flex justify-center md:w-[80%]'>
                <Outlet />
            </main>
        <Footer />
        </AnimalsContext.Provider>
    </body>
}