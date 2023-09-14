import img1 from '../../images/Doctor.png';
function About() {
    return (
        <div className="w-[80%] mx-auto grid grid-cols-2 mt-10 gap-[15px]">
            <div className="flex flex-col">
                <div>
                    <h3 className="my-10 h-[60px] border-b-4 border-b-blue-500 text-3xl font-bold text-blue-900">About Us</h3>
                </div>
                <div>
                    <p className="w-[100%] text-lg text-gray-500 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ab impedit, repellendus beatae consectetur dignissimos amet
                        eius incidunt quas aliquid nostrum architecto eos illo odio,
                        voluptas expedita est, quasi ipsum quia. Ab impedit, repellendus
                        beatae consectetur dignissimos amet
                        eius incidunt quas aliquid nostrum architecto eos illo odio,
                        voluptas expedita est, quasi ipsum quia.</p>
                </div>
            </div>
            <div>
                <img src={img1} class="" alt="" />
            </div>
        </div>
    )
};
export default About;