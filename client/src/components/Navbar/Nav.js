// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import img1 from '../../images/Union.png';

function Nav() {
    return (
        <nav>
            <div className='logo'>
                <img src={img1} class="" alt="" />
            </div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
                <button>Login/SignUp</button>
            </ul>
        </nav>
    )
};
export default Nav;