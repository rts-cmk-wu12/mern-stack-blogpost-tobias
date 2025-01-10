import { NavLink } from "react-router";

function Header() {
    return (
        <header>
            <h1>MyBlog</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register'>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new'>Create Post</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;