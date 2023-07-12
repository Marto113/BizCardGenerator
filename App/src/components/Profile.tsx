import { Navbar } from './Navbar'
import "../styles/Profile.css"
import '../styles/Main.css'
import { useState, ChangeEvent, useEffect } from 'react'
import { profile } from "../api/ProfileRequest.ts";
import {profileChange} from "../api/ProfileChangeRequest.ts";



export const Profile = () => {
    const isLoggedIn = true;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [state, setState] = useState(false);
    
    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        setState(true)
    };
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
        setState(true)
    };
    const handleMobileNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMobileNumber(e.target.value);
        setState(true)
    };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setState(true)
    };
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setState(true)
    };

    const onSubmit = async () => {
        const fnameInput = document.getElementById("fname") as HTMLInputElement;
        const lnameInput = document.getElementById("lname") as HTMLInputElement;
        const phoneInput = document.getElementById("phone") as HTMLInputElement;
        const emailInput = document.getElementById("email") as HTMLInputElement;

        const fnameValue = fnameInput?.value;
        const lnameValue = lnameInput?.value;
        const phoneValue = phoneInput?.value;
        const emailValue = emailInput?.value;
        profileChange(fnameValue, lnameValue, phoneValue, emailValue, password);
    }

    const fetchUserData = async () => {
        const response = await profile();
        console.log(response)
        setFirstName(response.firstName);
        setLastName(response.lastName);
        setMobileNumber(response.phone);
        setEmail(response.email);
        setPassword(response.password);
        console.log(password)
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn}/>
            <div>
                <h1>Profile</h1>
                <div className="container">
                    <input type="email" id="fname" placeholder="Last name" value={firstName} onChange={handleFirstNameChange}/>
                    <input type="email" id="lname" placeholder="Last name" value={lastName} onChange={handleLastNameChange}/>
                    <input type="email" id="phone" placeholder="Mobile phone" value={mobileNumber} onChange={handleMobileNumberChange}/>
                    <input type="email" id="email" placeholder="Email address" value={email} onChange={handleEmailChange}/>
                    <button type="submit" disabled={!state} onClick={onSubmit} className="submit-btn">
                        Apply Changes
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;