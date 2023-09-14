import { Link } from 'react-router-dom';
import img1 from '../../images/Union.png';

function Nav() {
    return (
        <div className=''>
            <nav className='w-[100%] h-12 shadow-md text-center max-sm'>
                <div className='flex justify-between w-[90%] mx-auto  mt-4  '>
                    <div className='text-base'>
                        <img src={img1} class="" alt="" />
                    </div>
                    <div className='flex gap-4'>
                        <ul className='flex gap-4 text-blue-900 text-lg font-semibold cursor-pointer'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                        <Link to="/login"> <button className='text-blue-900 text-lg font-semibold border-2 rounded-3xl p-1 border-blue-900'>Login</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
};
export default Nav;