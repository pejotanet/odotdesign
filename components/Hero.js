import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {

    return (
      <div className="flex flex-wrap items-center justify-center min-h-[600px] bg-cover bg-center custom-img">
        <div className='sm:w-[1240px] p-5 sm:p-4 '>
            <div className="w-[50%] p-4 sm:p-5 text-[#D9D9D9] z-[2] text-left">
                <h1 className="py-5 text-4xl font-bold ">
                    <b className="text-[#FCD307]">
                        <Typewriter 
                            words={['Crafting', 'Elevating', 'Improving']}
                            loop={0}
                            cursor 
                        />
                    </b> 
                    Digital Presence For Businesses
                </h1>   
                <p className="py-5 sm:text-md font-normal">
                    We help elevate entrepreneurs and emerging businesses to digital leaders. With our team, we guarantee you'll make a powerful impact online.
                </p>
                <div className='py-5 w-[195px]'>
                    <Link href='/' target='_blank'>
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="px-8 py-2 w-[140px] bg-[#FCD307] cursor-pointer text-black hover:border hover:text-white"
                        >
                            Let's Talk
                        </motion.div>
                    </Link>
                </div>
            </div> 
        </div>
      </div>
    )
  }
  