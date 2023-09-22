import img1 from '../../images/Rectangle 7.png';
import img2 from '../../images/Rectangle 3.png';
import img3 from '../../images/Rectangle 4.png';
import img4 from '../../images/Rectangle 5.png';
import img5 from '../../images/Rectangle 6.png';
import img6 from '../../images/Frame 3.png';
import img7 from '../../images/Frame 4.png';
import img8 from '../../images/Frame 5.png';
import img9 from '../../images/Frame 6.png';
import img10 from '../../images/Group 2.png';
import img11 from '../../images/Group 1.png';
import img12 from '../../images/pose_2.png';
import { BsLungsFill } from "react-icons/bs";
import { GiMicroscope } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GiFirstAidKit } from "react-icons/gi";

function Service() {
    return (
        <div className="bg-slate-100 my-[50px]" id='services'>
            <div className="w-[80%] mx-auto">
                <h1 className="text-4xl w-[70%] text-center pt-5 mx-auto text-blue-950 font-bold">Join world class hospitals around the world in enjoying premium service </h1>
                <h3 className="text-3xl w-[70%] text-center mt-3 mx-auto text-blue-900 font-bold">The Best Doctors Gives The Least Medicines</h3>
                <h6 className="text-xl w-[70%] text-center mt-3 mx-auto text-gray-500 font-medium">A perfect way to show your hospital services</h6>

            </div>
            <div className='flex flex-wrap justify-between mt-10'>
                <img src={img1} className='' alt="" />
                <img src={img2} className='' alt="" />
                <img src={img3} className='' alt="" />
                <img src={img4} className='' alt="" />
                <img src={img5} className='' alt="" />
            </div>

            <div className='w-[80%] grid grid-cols-4 gap-6 mx-auto my-[50px]'>
                <div className='flex flex-col flex-wrap justify-center items-center'>
                    <p className='text-blue-800 font-bold text-3xl border-2 border-gray-400 p-3 rounded-full w-[20%] mb-8'><BsLungsFill /></p>
                    <p className='text-center mb-8 text-gray-700 text-lg font-medium'>Cardio Monitoring</p>
                    <p className='text-center mb-8 text-gray-500 text-base font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Molestias, temporibus? Ea provident facilis necessitatibus
                        officiis assumenda nisi corrupti officia? Nam dolorum impedit
                        doloremque enim, voluptate magnam deleniti dicta delectus eaque.</p>
                </div>

                <div className='flex flex-col flex-wrap justify-center items-center'>
                    <p className='text-blue-800 font-bold text-3xl border-2 border-gray-400 p-3 rounded-full w-[20%] mb-8'><GiMicroscope /></p>
                    <p className='text-center mb-8 text-gray-700 text-lg font-medium'>Medical Treatment</p>
                    <p className='text-center mb-8 text-gray-500 text-base font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Molestias, temporibus? Ea provident facilis necessitatibus
                        officiis assumenda nisi corrupti officia? Nam dolorum impedit
                        doloremque enim, voluptate magnam deleniti dicta delectus eaque.</p>
                </div>

                <div className='flex flex-col flex-wrap justify-center items-center'>
                    <p className='text-blue-800 font-bold text-3xl border-2 border-gray-400 p-3 rounded-full w-[20%] mb-8'><BsFillHeartPulseFill /></p>
                    <p className='text-center mb-8 text-gray-700 text-lg font-medium'>Emergency Help</p>
                    <p className='text-center mb-8 text-gray-500 text-base font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Molestias, temporibus? Ea provident facilis necessitatibus
                        officiis assumenda nisi corrupti officia? Nam dolorum impedit
                        doloremque enim, voluptate magnam deleniti dicta delectus eaque.</p>
                </div>

                <div className='flex flex-col flex-wrap justify-center items-center'>
                    <p className='text-blue-800 font-bold text-3xl border-2 border-gray-400 p-3 rounded-full w-[20%] mb-8'><GiFirstAidKit /></p>
                    <p className='text-center mb-8 text-gray-700 text-lg font-medium'>First Aid</p>
                    <p className='text-center mb-8 text-gray-500 text-base font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Molestias, temporibus? Ea provident facilis necessitatibus
                        officiis assumenda nisi corrupti officia? Nam dolorum impedit
                        doloremque enim, voluptate magnam deleniti dicta delectus eaque.</p>
                </div>
            </div>

            <div className='flex flex-wrap flex-col w-[80%] mx-auto'>
                <div className='w-[35%] mx-auto justify-center my-[50px]'>
                    <h1 className='text-3xl text-center mt-3 text-blue-900 font-bold'>Access powerful tools that allow your hospital to thrive</h1>
                </div>
                <div className='flex justify-center w-[50%] mx-auto gap-0'>
                    <img src={img6} className='' alt="" />
                    <img src={img7} className='' alt="" />
                    <img src={img8} className='' alt="" />
                    <img src={img9} className='' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-2 gap-10 w-[70%] mx-auto my-[80px] '>
                <div className='flex flex-col w-[80%] pt-[60px] '>
                    <p className='mb-7 text-3xl text-blue-900 font-bold w-[90%]'>Seamless healthcare service</p>
                    <p className='text-gray-500 text-base font-bold w-[80%]'>Give your patients the service that will make them ask if they are still in Nigeria</p>
                </div>
                <div>
                    <img src={img10} className='' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-2 gap-10 w-[70%] mx-auto my-[80px] '>
                <div>
                    <img src={img11} className='' alt="" />
                </div>
                <div className='flex flex-col w-[80%] pt-[80px] '>
                    <p className='mb-7 text-3xl text-blue-900 font-bold w-[90%]'>Payment & Insurance</p>
                    <p className='text-gray-500 text-base font-bold w-[90%]'>Easily manage your payments and insurance issues directly from one place without too much fuzz.</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-10 w-[70%] mx-auto my-[80px] '>
                <div className='flex flex-col w-[80%] pt-[60px] '>
                    <p className='mb-7 text-3xl text-blue-900 font-bold w-[90%]'>Safe & Secure</p>
                    <p className='text-gray-500 text-base font-bold w-[80%]'>Never worry about been hacked. We provide round the clock security for your data and all that you have entrusted to us.</p>
                </div>
                <div>
                    <img src={img12} className='' alt="" />
                </div>
            </div>
        </div>
    )
};
export default Service;