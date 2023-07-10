import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
import '../styles/Login.css'
import { login } from '../api/LoginRequest.ts'

async function LoginHandle (event: React.MouseEvent<HTMLButtonElement>) {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const emailValue = emailInput?.value;
    const passValue = passwordInput?.value;

    const response = await login(emailValue, passValue);

    console.log(response);
};

export const Login = () => {    
    return (
        <>
        <Navbar isLoggedIn={false}/>
            <div>
                <h1>Login</h1>
                <div className="container">
                    <input id="email" type="email" placeholder="Email"/>
                    <input id="password" type="password" placeholder="Password"/>
                    <Link to="/signup">Don't have an account?</Link>
                    <button id="loginButton" onClick={LoginHandle}>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Login;