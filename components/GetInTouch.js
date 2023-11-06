import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import SliderData from "./SliderData";

function GetInTouch() {

  return (
    <section className='relative flex flex-wrap w-full h-auto overflow-hidden'>
        <div className='flex flex-wrap w-[1240px] min-h-[300px] mx-auto xl:mt-16'>
                <h1 className='text-4xl font-semibold p-2 text-center mt-16 lg:w-[16em] mx-auto'>Transform Your Business Stand Out Online</h1>
                <p className='text-xl font-normal text-center w-full mt-8 my-16 md:my-4'>Get in touch with Odot Design to elevate your digital presence.</p>
                <div className="flex flex-wrap mx-auto justify-between my-4 p-2 w-[150px] h-[120px] xl:min-w-[350px]">
                  <Link href='/' target='_blank'>
                      <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="my-2 xl:my-0 bg-[#FCD307] lg:text-black hover:border text-center table-cell align-middle hover:border-black w-[140px] h-[40px]"
                      >
                        Let's Talk
                      </motion.div>
                  </Link>
                  <Link href='/' target='_blank'>
                      <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className=" my-2 xl:my-0 bg-[#FCD307] lg:text-black hover:border text-center table-cell align-middle hover:border-black w-[140px] h-[40px]"
                      >
                        Portfolio
                      </motion.div>
                  </Link>
                </div>
        </div>
        <div className="min-h-[300px] mx-auto">
          <motion.div className="cursor-grab overflow-hidden">
            <motion.div drag='x' dragConstraints={{right: 0, left: -790 }} className='flex h-[190px]'>
              {SliderData.map((image) => {
                return (
                  <motion.div className="w-[300px] h-[190px]" key={image}>
                    <Image src={image} alt='' className=' object-cover pointer-events-none' width={960} height={600}/>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        <div className='absolute bg-[#f6f6f6] lg:bg-[#FCD307] w-[500px] h-[500px] rounded-e-3xl bottom-0 xl:bottom-16 left-0 -z-10 overflow-hidden'/>
    </section>
  )
}

export default GetInTouch