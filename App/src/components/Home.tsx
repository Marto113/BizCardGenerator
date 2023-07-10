import { Navbar } from './Navbar'
import '../styles/Main.css'
import '../styles/Home.css'
import image from '../assets/image.png'
export const Home = () => {
    const isLoggedIn = false;

    return (
        <>
        <Navbar isLoggedIn={isLoggedIn}/>
            <div>
                <h1>Business Card Generation</h1>
                <h2>Our Business Card Generator provides you with the tools to <br></br>
                effortlessly create custom cards
                that showcase your unique brand. <br></br>
                Whether you're a freelancer, entrepreneur, or a small business owner,<br></br>
                our user-friendly interface will help you stand out from the crowd.</h2>
                <img src={image} alt="Image" />
            </div>
        </>
    )
}

export default Home