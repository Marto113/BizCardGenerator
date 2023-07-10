import { Link } from 'react-router-dom'
import  '../styles/Navbar.css'
import '../styles/Main.css'

export const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn ? null : <Link to="/login">Log In</Link>}
            {isLoggedIn ? null : <Link to="/signup">Sign Up</Link>}
            <Link to="/generate">Generate a card</Link>
            <Link to="/auth">Authenticate</Link> 
            {isLoggedIn ? <Link to="/settings">Settings</Link> : null}
            {isLoggedIn ? <Link to="/profile">Profile</Link> : null}
            {isLoggedIn ? <Link to="/preview">Card Preview</Link> : null} 
        </nav>
    )
}

export default Navbar;
