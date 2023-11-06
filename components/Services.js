import { motion } from "framer-motion";

function Services() {
  return (
    <section className="flex flex-wrap overflow-hidden w-full bg-[#D9D9D9]">
        <h1 className="text-3xl w-full font-medium text-center mx-auto mt-8 ">Odot Design and our services.</h1>
        <p className="text-lg w-full font-light text-center mx-auto mt-2">Stand out with our bespoke branding, web design, and membership services</p>
        <div className="flex flex-wrap w-[1240px] min-h-[600px] xl:min-h-[500px] py-16 lg:py-8 mx-auto justify-center">
            <div className=" w-[300px] h-[400px] max-xl:mt-16 border border-black">
                <div className="w-full p-4 h-[360px]">
                    <h3>Branding Solution</h3>
                    <h1 className="text-4xl font-semibold">$1500</h1>
                    <p className="mt-4">Includes:</p>
                    <ul className="p-2">
                        <li className="p-0.5">Full logo design</li>
                        <li className="p-0.5">Color palette creation</li>
                        <li className="p-0.5">Typography guidelines</li>
                        <li className="p-0.5">Voice and tone guidance</li>
                        <li className="p-0.5">Brand usage mockups</li>
                        <li className="p-0.5">Comprehensive brand guidelines document</li>
                    </ul>  
                </div>
                <motion.div whileHover={{ scale: [null, 1.3, 1.2] }} transition={{ duration: 0.3 }} className="p-4 mx-auto w-[80%] h-[20%] bg-[#FCD307] shadow-lg">
                    <p className="text-xl font-semibold text-center mt-2">Get Started</p>
                </motion.div>
            </div>
            <div className=" w-[300px] h-[400px] sm:ml-8 max-xl:mt-16 border border-black">
                <div className="w-full p-4 h-[360px]">
                    <h3>Web Design & Development</h3>
                    <h1 className="text-4xl font-semibold">Lets Talk</h1>
                    <p className="mt-4">Includes:</p>
                    <ul className="p-2">
                        <li className="p-0.5">Custom website design</li>
                        <li className="p-0.5">Mobile-responsive design</li>
                        <li className="p-0.5">SEO-optimized layout</li>
                        <li className="p-0.5">User-friendly CMS</li>
                        <li className="p-0.5">Integration with necessary plugins</li>
                        <li className="p-0.5">Basic training for site management</li>
                    </ul>  
                </div>
                <motion.div whileHover={{ scale: [null, 1.3, 1.2] }} transition={{ duration: 0.3 }} className="p-4 mx-auto w-[80%] h-[20%] bg-[#FCD307] shadow-lg">
                    <p className="text-xl font-semibold text-center mt-2">Get a Quote</p>
                </motion.div>
            </div>
            <div className=" w-[300px] h-[400px] md:ml-8 max-xl:mt-16 border border-black">
                <div className="w-full p-4 h-[360px]">
                    <h3>Social Media Membership</h3>
                    <h1 className="text-4xl font-semibold">$350/mo</h1>
                    <p className="mt-4">Includes:</p>
                    <ul className="p-2">
                        <li className="p-0.5">1 Instagram Post per week</li>
                        <li className="p-0.5">1 Instagram Carousel per week</li>
                        <li className="p-0.5">1 Instagram Reel per week</li>
                        <li className="p-0.5">Content suggestions</li>
                        <li className="p-0.5">Brand usage mockups</li>
                        <li className="p-0.5">Customized graphics tailored to your brand</li>
                    </ul>  
                </div>
                <motion.div whileHover={{ scale: [null, 1.3, 1.2] }} transition={{ duration: 0.3 }} className="p-4 mx-auto w-[80%] h-[20%] bg-[#FCD307] shadow-lg">
                    <p className="text-xl font-semibold text-center mt-2">Get Started</p>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Services