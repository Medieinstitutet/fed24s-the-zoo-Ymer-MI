import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = () => {
    return <body>
        <Header />
        <main className="md:w-[80%]">
            <Outlet />
        </main>
        <Footer />
    </body>
}