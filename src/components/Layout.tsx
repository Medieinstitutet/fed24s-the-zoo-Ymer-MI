import { Outlet, useLoaderData } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"
import type { Animal } from "../models/Animal"

export const Layout = () => {
    const { animals } = useLoaderData<{animals: Animal[]}>()

    console.log(animals)

    return <body>
        <Header />
        <main className="md:w-[80%]">
            <Outlet />
        </main>
        <Footer />
    </body>
}