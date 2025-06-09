import { Outlet } from "react-router"
import { Header } from "./Header"

export const Layout = () => {
    return <body className="flex flex-col min-h-screen w-full">
        <Header />
        <main>
            <Outlet />
        </main>
    </body>
}