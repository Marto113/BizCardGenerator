import { Navbar } from './Navbar.tsx'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
import '../styles/Signup.css'
import { register } from '../api/RegisterRequest.ts'
import NumberInputContainer from './NumberInputContainer.tsx'

async function SignupHandle (event: React.MouseEvent<HTMLButtonElement>) {
    const fnameInput = document.getElementById("fname") as HTMLInputElement;
    const lnameInput = document.getElementById("lname") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confpassInput = document.getElementById("confpass") as HTMLInputElement;

    const fnameValue = fnameInput?.value;
    const lnameValue = lnameInput?.value;
    const phoneValue = phoneInput?.value;
    const emailValue = emailInput?.value;
    const passwordValue = passwordInput?.value;
    const confpassValue = confpassInput?.value;


    // has to be checked if passwordValue and confpassValue are equal else show message
    if(passwordValue === confpassValue){
        const response = await register(fnameValue, lnameValue, phoneValue, emailValue, passwordValue);
        <NumberInputContainer />
    } else {
        window.alert("Passwords don't match!")
    }
};

export const Signup = () => {
    return (
        <>
        <Navbar isLoggedIn={false}/>
            <div>
                <h1>Sign Up</h1>
                <div className="container">
                    <input id="fname" type="email" placeholder="First Name"/>
                    <input id="lname" type="email" placeholder="Last Name"/>
                    <input id="phone" type="number" placeholder="Phone Number"/>
                    <input id="email" type="email" placeholder="Email"/>
                    <input id="password" type="password" placeholder="Password"/>
                    <input id="confpass" type="password" placeholder="Confrim Password"/>
                    <Link to="/login">Already have an account?</Link>
                    <button onClick={SignupHandle}>Log in</button>
                </div>
            </div>
        </>
    )
}

export default Signup;