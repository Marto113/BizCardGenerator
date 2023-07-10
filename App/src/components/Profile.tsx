import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import "../styles/Profile.css"
import '../styles/Main.css'
import React, { useState, ChangeEvent } from 'react'

export const Profile = () => {
    const isLoggedIn = true;
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');

    const [generatedContent, setGeneratedContent] = useState<JSX.Element | null>(null);
  
    const handleCompanyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
    };
  
    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };
  
    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleMobileNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMobileNumber(e.target.value);
    };

    const handleWebsiteChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWebsite(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <>
        <Navbar isLoggedIn={isLoggedIn}/>
            <div>
                <h1>Profile</h1>
                <div className="container">
                    <input type="email" placeholder="First name" value={firstName} onChange={handleFirstNameChange}/>
                    <input type="email" placeholder="Last name" value={lastName} onChange={handleLastNameChange}/>
                    <input type="email" placeholder="Mobile phone" value={mobileNumber} onChange={handleMobileNumberChange}/>
                    <input type="email" placeholder="Email address" value={email} onChange={handleEmailChange}/>
                    <input type="email" placeholder="Website" value={website} onChange={handleWebsiteChange}/>
                    <input type="email" placeholder="Company name" value={companyName} onChange={handleCompanyNameChange}/>
                    <input type="email" placeholder="Address" value={address} onChange={handleAddressChange}/>
                    <button type="submit" className="submit-btn">
                        Apply Changes
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;