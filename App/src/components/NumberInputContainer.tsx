import React, { useState } from 'react';
import '../styles/NumberInputContainer.css';
import OtpInput from './OtpInput';

const NumberInputContainer: React.FC = () => {
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);

//   const handleVerify = () => {

//   };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <h1>Authentication is required in order to create your account.</h1>
      <p>We sent a 6-digit code to you. Please enter it below.</p>
      <OtpInput value={otp} valueLength={6} onChange={onChange} />
      <button style={{ marginTop: '20px' }}>Verify</button>
    </div>
  );
};

export default NumberInputContainer;
