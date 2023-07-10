import React from 'react';
// import '../styles/PaymentForm.css'

const PaymentForm: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    margin: 0,
    padding: '30px 10px',
    boxSizing: 'border-box',
    fontFamily: 'Montserrat, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#E2E2E2',
  };

  const cardStyle = {
    maxWidth: '500px',
    margin: 'auto',
    color: '#FF9A5C',
    borderRadius: '20px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '30px',
    fontWeight: 800,
    textAlign: 'center' as 'center', // Use string literal type
  };

  const buttonStyle = {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 15px',
    backgroundImage: 'linear-gradient(to right, #FF9A5C 0%, #FFC46D 51%, #FF9A5C 100%)',
    border: 'none',
    transition: '0.5s',
    backgroundSize: '200% auto',
  };

  const inputStyle = {
    color: 'black',
    border: '1px solid #C4C4C4',
    height: '60px',
    paddingLeft: '20px',
    verticalAlign: 'middle',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="card px-4">
        <p style={headingStyle} className="h8 py-3">
          Payment Details
        </p>
        <div className="row gx-3">
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Person Name</p>
              <input
                style={inputStyle}
                className="form-control mb-3"
                type="text"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-column">
              <p className="text mb-1">Card Number</p>
              <input
                style={inputStyle}
                className="form-control mb-3"
                type="text"
                placeholder="1234 5678 435678"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-column">
              <p className="text mb-1">Expiry</p>
              <input style={inputStyle} className="form-control mb-3" type="text" placeholder="MM/YYYY" />
            </div>
          </div>
          <div className="col-6" style={{ flexBasis: '50%' }}>
  <div className="d-flex flex-column" style={{ flexGrow: 1 }}>
    <p className="text mb-1">CVV/CVC</p>
    <input
      style={{ ...inputStyle, width: '100%' }}
      className="form-control mb-3 pt-2"
      type="password"
      placeholder="***"
    />
  </div>
</div>

          <div className="col-12">
            <div style={buttonStyle} className="btn btn-primary mb-3">
              <span className="ps-3">Pay</span>
              <span className="fas fa-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
