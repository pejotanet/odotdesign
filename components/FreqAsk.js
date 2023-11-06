import Image from "next/image"
import { useState } from "react";
import { motion } from "framer-motion";
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

import img from "../public/sanfrancisco.avif"

function FreqAsk() {

  const [isOpen, setIsOpen] = useState(null);

  const toogle = (i) => {
    if(isOpen == i) {
      return setIsOpen(null)
    }

    setIsOpen(i)
  }

  return (
    <section className='flex flex-wrap w-full mt-16 min-h-[600px]'>
        <div className="2xl:absolute max-2xl:hidden 2xl:left-[4%]">
          <Image src={img} width={400} />
        </div>
        <div className="flex w-full min-h-[400px] bg-[#FCD307] my-[50px] text-center">
          <div className="h-full w-[1240px] mx-auto py-16">
            <div className="mx-auto 2xl:ml-[270px] text-left">
              <h1 className="text-4xl font-bold px-8 py-4 ">
                FAQs
              </h1>
              <h2 className="text-2xl font-light px-8 py-2">
                Find answers to common questions about 
                Odot Design and our services.
              </h2>
            </div>

            <motion.div className="mx-auto 2xl:ml-[270px] text-md text-left">
              <motion.div layout className="border border-black 2xl:ml-8 mx-4 mt-8 p-1">
                {data.map((item, i) => (
                  <>
                    <motion.div data-isOpen={isOpen} onClick={() => toogle(i)} className="flex p-1 font-semibold justify-between cursor-pointer">
                      <p className="md:text-base text-sm">{item.question}</p>
                      {isOpen === i ? 
                        <motion.div layout>
                          <FiChevronUp size={20} />
                        </motion.div>   
                      :
                      <motion.div layout>
                          <FiChevronDown size={20}/>
                        </motion.div>
                      }
                    </motion.div>
                      {isOpen === i && (
                        <motion.div layout className="px-4 py-1 font-normal text-sm">
                          <p>{item.answer}</p>
                        </motion.div>
                      )}
                  </>
                ))}
              </motion.div>
            </motion.div>
            
          </div>
        </div>
    </section>
  )
}

const data = [
  {
    question: "How long does a typical project last?",
    answer: "The timeline varies: 2-4 weeks for standard websites, 3 weeks to 2 months for e-commerce, and 1-2 weeks for branding guidelines. However, these durations can be influenced by the timely delivery of essential assets like photos, content, and other materials from the client.",
  },
  {
    question: "How does the personalized quote process for web design and social media work?",
    answer:   "After you share your vision with us, we'll dive into the specifics and craft a personalized quote tailored to your needs.",
  },
  {
    question: "How do revisions and feedback work?",
    answer:   "Our design conversations unfold within Figma. For a seamless feedback journey, clients are encouraged to have a FREE Figma account.",
  },
  {
    question: "Can I request additional content or coverage for more platforms with the social media membership?",
    answer:   "Absolutely! While our base membership includes weekly content for Instagram (1 Post, 1 Carousel, and 1 Reel), we understand brands may have diverse needs. If you’re looking for additional content or need posts for other platforms, reach out to us, and we can provide a personalized quote.",
  },
  {
    question: "Can I split my payments for web design and branding services?",
    answer:   "Yes, for our web design and branding services, you can opt to split your payments into three installments. Typically, the first payment is made at the beginning of the project, the second after the completion of the initial version, and the final payment is required before the delivery of the final project/assets.",
  },
]

export default FreqAsk