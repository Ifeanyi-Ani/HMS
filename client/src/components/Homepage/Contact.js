function Contact() {
  return (
    <div className="w-[100%] h-[600px] bg-blue-800" id="contact">
      <div className="">
        <p className="pt-5 w-[50%] mx-auto text-center text-white text-2xl font-medium">
          Contact Us
        </p>
        <p className="mt-3 w-[60%] mx-auto text-center text-white text-base font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          libero?
        </p>
      </div>

      <div className="flex justify-between gap-5 flex-col mt-10">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-blue-600 w-[80%] mx-auto p-3 outline-0 text-white rounded-lg"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="bg-blue-600 w-[80%] mx-auto p-3 outline-0 text-white rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          name=""
          id=""
          cols="30"
          rows="5"
          className="bg-blue-600 w-[80%] mx-auto p-2 outline-0 text-white"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button className="w-[50%] mx-auto bg-white mt-8 p-2 text-blue-600 font-bold text-base rounded-3xl border-2">
          ⇾ Send Message
        </button>
      </div>
    </div>
  );
}
export default Contact;
