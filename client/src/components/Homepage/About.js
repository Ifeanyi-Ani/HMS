import img1 from '../../images/doctor.avif';
function About() {
    return (
        <div id='about'>
            <div className="w-[80%] mx-auto grid grid-cols-2 mt-10 gap-[40px] justify-between">
                <div className="flex flex-col">
                    <div>
                        <h3 className="my-10 h-[60px] border-b-4 border-b-blue-500 text-3xl font-bold text-blue-900">About Us</h3>
                    </div>
                    <div>
                        <p className="w-[100%] text-lg text-gray-600 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ab impedit, repellendus beatae consectetur dignissimos amet
                            eius incidunt quas aliquid nostrum architecto eos illo odio,
                            voluptas expedita est, quasi ipsum quia. Ab impedit, repellendus
                            beatae consectetur dignissimos amet
                            eius incidunt quas aliquid nostrum architecto eos illo odio,
                            voluptas expedita est, quasi ipsum quia.</p>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <img src={img1} className='w-[100%] object-cover mt-11' alt="" />
                </div>
            </div>

            <div className='flex flex-wrap mt-[50px]  w-[80%] mx-auto justify-between mb-5'>
                <div className='flex flex-col border-r-2 w-[25%] h-auto gap-5 justify-between text-center border-r-blue-900 '>
                    <h1 className='mt-5 text-4xl text-blue-950 font-bold'>50+</h1>
                    <p className='mb-5 text-gray-600 text-xl font-semibold'>Countries covered</p>
                </div>
                <div className='flex flex-col border-r-2 w-[25%] h-auto gap-5 justify-between text-center border-r-blue-900 '>
                    <h1 className='mt-5 text-4xl text-blue-950 font-bold'>8,900+</h1>
                    <p className='mb-5 text-gray-600 text-xl font-semibold'>Hospitals Serviced</p>
                </div>
                <div className='flex flex-col border-r-2 w-[25%] h-auto gap-5 justify-between text-center border-r-blue-900 '>
                    <h1 className='mt-5 text-4xl text-blue-950 font-bold'>10,000+</h1>
                    <p className='mb-5 text-gray-600 text-xl font-semibold'>Consulting Hours</p>
                </div>
                <div className='flex flex-col w-[25%] h-auto gap-5 justify-between text-center border-r-blue-900 '>
                    <h1 className='mt-5 text-4xl text-blue-950 font-bold'>10+</h1>
                    <p className='mb-5 text-gray-600 text-xl font-semibold'>Awards</p>
                </div>
            </div>

        </div>
    )
};
export default About;