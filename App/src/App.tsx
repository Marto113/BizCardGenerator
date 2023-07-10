import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { CardGenerator } from './components/CardGenerator'
// import { Profile } from './components/Profile'
// import ImagePreview from './components/ImagePreview'
import NumberInputContainer from './components/NumberInputContainer'

import { Profile } from './components/Profile'
import  ImagePreview  from './components/ImagePreview'
import PaymentForm from './components/PaymentForm'

function App() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='generate' element={<CardGenerator />} />
              <Route path='profile' element={<Profile />} />
              <Route path='preview' element={<ImagePreview />} />
              <Route path='auth' element={<NumberInputContainer />} />
              <Route path='payment' element={<PaymentForm />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
};

export default App;
