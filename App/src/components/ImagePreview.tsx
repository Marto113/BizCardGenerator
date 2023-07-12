import React, { useState } from 'react';
import { Navbar } from './Navbar';
import PaymentForm from './PaymentForm';
import { Link } from 'react-router-dom';

const ImagePreview: React.FC = () => {
    const [isImageVisible, setImageVisible] = useState(false);
    const [isButtonVisible, setButtonVisible] = useState(false);
    const [isBlurred, setBlurred] = useState(true); 

    const handleButtonClick = () => {
        setImageVisible(true); 

    };

    const handleSecondButtonClick = () => {
        // <PaymentForm />
        //setBlurred(false);
        //setButtonVisible(true);
    };

    const isLoggedIn = true;

    return (
      <>
        <Navbar isLoggedIn={isLoggedIn}/>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {!isImageVisible && (
            <button onClick={handleButtonClick}>Show Image</button>
          )}
          {isImageVisible && (
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt="Displayed Image"
                style={{ filter: isBlurred ? 'blur(5px)' : 'none' }}
              />
              <img
                src="https://pngimg.com/uploads/padlock/padlock_PNG9445.png"
                alt="Overlay Image"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                  width: 'auto', 
                  height: 'auto', 
                  display: isButtonVisible ? 'none' : 'block', 
                }}
              />
            </div>
          )}
          {isImageVisible && !isButtonVisible && (
            <div style={{ marginTop: '20px' }}>
            <Link to="/payment">
              <button onClick={handleSecondButtonClick}>Get Card</button>
            </Link>
            </div>
          )}
        </div>
      </>
    );
  
};

export default ImagePreview;

// const [imageLoaded, setImageLoaded] = useState(false);
//   const [paymentRequired, setPaymentRequired] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   const handlePaymentRequest = () => {
//     setPaymentRequired(true);
//   };

//   return (
//     <div className="relative">
//       <img
//         src={imageUrl}
//         alt="Preview"
//         className={`w-full ${imageLoaded ? 'blur-none' : 'blur'}`}
//         onLoad={handleImageLoad}
//       />
//       {!imageLoaded && (
//         <button className="load-button" onClick={handleImageLoad}>
//           Load Image
//         </button>
//       )}
//       {imageLoaded && !paymentRequired && (
//         <div className="payment-lock">
//           <button className="unlock-button" onClick={handlePaymentRequest}>
//             Unlock
//           </button>
//         </div>
//       )}
//     </div>
//   );

// import React, { useState } from 'react';
// import axios from 'axios';

// const ImagePreview: React.FC = () => {
//   const [imageData, setImageData] = useState('');
//   const [isLocked, setIsLocked] = useState(true);

//   const fetchImage = async () => {
//     try {
//         const response = await fetch('https://www.w3schools.com/css/img_lights.jpg'); // Replace with the actual image URL
//         const blob = await response.blob();
//         const imageUrl = URL.createObjectURL(blob);
//         setImageData(imageUrl);
//     } catch (error) {
//       console.error('Error fetching image:', error);
//     }
//   };

//   const handleUnlock = () => {
//     setIsLocked(false);
//   };

//   return (
//     <div>
//       {imageData ? (
//         <div>
//           {isLocked ? (
//             <div>
//               <img
//                 src={imageData}
//                 alt="Preview"
//                 style={{ 
//                     filter: 'blur(8px)', 
//                     width: '100%', 
//                     height: 'auto',
//                     maxWidth: '500px',
//                     maxHeight: '500px', 
//                 }}
//               />
//               <button onClick={handleUnlock}>Unlock</button>
//             </div>
//           ) : (
//             <img
//               src={imageData}
//               alt="Preview"
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 maxWidth: '500px',
//                 maxHeight: '500px',
//               }}
//             />
//           )}
//         </div>
//       ) : (
//         <button onClick={fetchImage}>Load Image</button>
//       )}
//     </div>
//   );
// };

// export default ImagePreview;
