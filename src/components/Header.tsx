import { NavLink } from "react-router"

export const Header = () => {
    return <header className="flex justify-between items-center">
        <h1>My Application</h1>
        <nav>
            <ul className="flex gap-4">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/animals'>About</NavLink></li>
            </ul>
        </nav>
    </header>
}