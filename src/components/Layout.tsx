import { Outlet, useLoaderData } from "react-router"
import { useReducer } from "react";
import { Header } from "./Header"
import { Footer } from "./Footer"
import type { Animal } from "../models/Animal"
import { AnimalsContext } from '../context/AnimalsContext';
import { AnimalsReducer } from "../reducers/AnimalsReducer";

export const Layout = () => {
    const [animals, dispatch] = useReducer(AnimalsReducer, useLoaderData<{animals: Animal[]}>().animals)

    return <body>
        <Header />
        <AnimalsContext.Provider value={{ animals, dispatch }}>
            <main className="md:w-[80%]">
                <Outlet />
            </main>
        </AnimalsContext.Provider>
        <Footer />
    </body>
}