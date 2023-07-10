import { Navbar } from './Navbar'
import '../styles/CardGenerator.css'
import { ImageUpload } from './ImageUpload'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, ChangeEvent } from 'react'
import styles from '../styles/Card.module.css'

export const CardGenerator = () => {
    const isLoggedIn = false;
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');

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

    const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPosition(e.target.value);
    };
  
    const handleGenerate = () => {
        const generatedElements = ( 
            <>
            <div className={styles.front}>
                <div className={styles.personalintro}>
                    <p>{companyName}</p>
                    <p>{address}</p>
                </div>
            </div>
            <br />
            <div className={styles.back}>
                <div className={styles.personalinfo}>
                    <p className={styles.names}>{firstName} {lastName}</p>
                    <p className={styles.position}>{position}</p>
                    <p className={styles.position}>{mobileNumber}</p>
                    <p className={styles.position}>{email}</p>
                    <p className={styles.company}>{companyName} | {address}</p>
                </div>
            </div>
            </>
        );

        setGeneratedContent(generatedElements);
    };
  
    return (
        <>
        <Navbar isLoggedIn={isLoggedIn}/>
            <div>
                <h1>Generate a Card</h1>
                <div className="card-generator-form">
                <input type="email" placeholder="First name" value={firstName} onChange={handleFirstNameChange}/>
                    <input type="email" placeholder="Last name" value={lastName} onChange={handleLastNameChange}/>
                    <input type="email" placeholder="Position" value={position} onChange={handlePositionChange}/>
                    <input type="email" placeholder="Mobile phone" value={mobileNumber} onChange={handleMobileNumberChange}/>
                    <input type="email" placeholder="Email address" value={email} onChange={handleEmailChange}/>
                    <input type="email" placeholder="Website" value={website} onChange={handleWebsiteChange}/>
                    <input type="email" placeholder="Company name" value={companyName} onChange={handleCompanyNameChange}/>
                    <input type="email" placeholder="Address" value={address} onChange={handleAddressChange}/>
                    <button onClick={handleGenerate}>Generate</button>
                </div>
                {/* <div className="container">
                    <h3>Upload a Logo</h3>
                    <ImageUpload />
                </div> */}

            </div>
            <div>{generatedContent}</div>
        </>
    );
};
export default CardGenerator;