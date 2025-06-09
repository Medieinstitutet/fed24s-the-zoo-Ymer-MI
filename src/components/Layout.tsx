import { Outlet } from "react-router"

export const Layout = () => {
    return <body>
        <main>
            <Outlet />
        </main>
    </body>
}