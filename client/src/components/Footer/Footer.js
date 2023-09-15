import img1 from '../../images/Union.png';
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdFax } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
function Footer() {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const scrollToServices = () => {
        const aboutSection = document.getElementById('services');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToHome = () => {
        const aboutSection = document.getElementById('home');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToContact = () => {
        const aboutSection = document.getElementById('contact');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className="bg-blue-950 h-[400px] mt-[100px] justify-between cursor-pointer">
            <div className="flex w-[90%] mx-auto pt-8 border-b-2 border-gray-500 h-[350px] ">
                <div className="flex flex-col  w-[20%] text-white leading-8">
                    <img src={img1} class="w-[50%] mb-10 justify-center items-center" alt="" />
                    <p>Medic Clinic</p>
                    <p>45 Lagos st, Garki 2</p>
                    <p>FCT, Abuja</p>
                    <p>Nigeria.</p>
                </div>

                <div className='w-[20%] pt-3 text-white leading-8'>
                    <h1 className='mb-10 text-xl text-blue-500'>Services</h1>
                    <p>Emergency room services.</p>
                    <p>Short-term hospitalization.</p>
                    <p>X-ray/radiology services</p>
                    <p>X-ray/radiology services</p>
                    <p>Blood services.</p>
                    <p>Laboratory services.</p>
                </div>

                <div className='w-[20%] pt-3 text-white leading-8'>
                    <h1 className='mb-10 text-xl text-blue-500'>Quick-Links</h1>
                    <p onClick={scrollToHome}>Home</p>
                    <p onClick={scrollToAbout}>About</p>
                    <p onClick={scrollToServices}>Services</p>
                    <p onClick={scrollToContact}>Contact Us</p>

                </div>

                <div className='w-[20%] pt-3 text-white leading-8'>
                    <h1 className='mb-10 text-xl text-blue-500'>Contact</h1>
                    <div className='flex gap-3 '>
                        <span className='pt-2'><BsFillHouseAddFill /></span>
                        <p >Garki II, FCT Abuja, Nigeria.</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='pt-2'><MdMail /></span>
                        <p>info@gmail.com</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='pt-2'><BsFillTelephoneFill /></span>
                        <p>+234 800 222 4444</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='pt-2'><MdFax /></span>
                        <p>+01 234 567 89</p>
                    </div>

                </div>

                <div className='w-[20%] pt-3 text-white leading-8'>
                    <h1 className='mb-10 text-xl text-blue-500'>Our Social Media</h1>
                    <div className='flex gap-3 '>
                        <span className='pt-2'><MdFacebook /></span>
                        <p>Facebook</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='pt-2'><AiFillInstagram /></span>
                        <p>Instagram</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='pt-2'><BsTwitter /></span>
                        <p>Twitter</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='pt-2'><BsLinkedin /></span>
                        <p>LinkedIn</p>
                    </div>
                    <div className='flex gap-3'>
                        <span className='pt-2'><BsGoogle /></span>
                        <p>Google</p>
                    </div>


                </div>

            </div>
            <div className='flex justify-center text-white mt-5'>
                <p>© 2023 Copyright: Orbis HMS</p>
            </div>
        </div>
    )
};
export default Footer;