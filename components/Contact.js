
function Contact() {
  return (
    <section id="contact" className="max-w-[1240px] mx-auto pt-16">
        <h1 className="text-center text-4xl font-bold p-2 w-full">Contact Us</h1>
        <h2 className="text-center text-xl font-light p-2 w-full">Let's work together!</h2>
        <form className="max-w-[600px] m-auto my-8 mx-auto p-4" >
          <input required minLength={3} maxLength={100} id="name" autoComplete="off" className="border border-[#262324] w-full p-3" type="text" placeholder="Name"></input>
          <input required minLength={5} maxLength={150} id="email" className="border border-[#262324] p-3 w-full my-2" type="email" placeholder="Email"></input>
          <textarea required minLength={10} maxLength={500} id="message" className="border border-[#262324] p-3 w-full h-[200px] text-black" cols='30' rows='10' placeholder="Message" ></textarea>
          <button className="bg-[#262324] text-white font-light p-3 w-[150px] mt-2 disabled:bg-gray-400 disabled:text-gray-100">Send</button>
        </form>
    </section>
  )
}

export default Contact