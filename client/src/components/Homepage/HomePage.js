import About from "./About";

function HomePage() {

    return (
        <div className=" w-[100%] cursor-pointer">
            <div className='mt-20 justify-center'>
                <h1 className='text-5xl text-center w-[40%] mx-auto font-bold text-blue-900'>Manage your Hospital like a pro</h1>
            </div>
            <div className="justify-center">
                <p className="w-[39%] text-center  mx-auto mt-5 text-stone-400 text-base">Orbis is the best HMS software in the market, don't take our word for it just book a demo and get a medical minds blown into a million pieces.</p>
            </div>
            <div className="mx-auto w-[15%] align-middle justify-center mt-4">
                <button className="bg-blue-900 p-3 font-semibold border-2 rounded-3xl w-[100%] text-white shadow">Book a demo ⇾</button>
            </div>
            <About />
        </div>
    )
};
export default HomePage;