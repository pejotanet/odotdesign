import { motion } from "framer-motion";
import { useState } from "react";

import {GrGroup, GrAction, GrChatOption, GrCycle} from 'react-icons/gr'
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'

export default function InfoGroup() {

  const [ConsultIsOpen, setConsultIsOpen] = useState(false);
  const [CollabIsOpen, setCollabIsOpen] = useState(false);
  const [EffortbIsOpen, setEffortIsOpen] = useState(false);
  const [FlexbIsOpen, setFlexIsOpen] = useState(false);



    return (
      <div className="flex flex-wrap items-center justify-center min-h-[300px] bg-[#FCD307]">
        <div className='flex flex-wrap w-[1240px] p-4 sm:justify-between'>
          <div className="w-[300px] h-[200px] mx-auto">
            <motion.div
              layout
              data-isOpen={ConsultIsOpen}
              initial={{ borderRadius: 50 }}
              onClick={() => setConsultIsOpen(!ConsultIsOpen)}
              className={`flex justify-center items-center p-2 w-[100px] h-[100px] mx-auto mt-8 bg-white border rounded-full cursor-pointer ${ConsultIsOpen && ('w-[250px] h-[150px]')}`}
            >
              {ConsultIsOpen && 
                <div className="text-xs p-2">
                  Share your project's scale with us and receive a personalized quote right in your inbox.
                </div>
              }
              <motion.div layout className={`w-10 h-10 ml-4 ${ConsultIsOpen &&('ml-0')}`}>
                <GrGroup className='mx-auto' size={40} />
              </motion.div>
              <motion.div className="w-4 h-4">
                {ConsultIsOpen ? 
                  <BiChevronLeft size={15} className="mx-auto" /> :
                  <BiChevronRight size={15} className="mx-auto" />
                }
              </motion.div>
            </motion.div>
            <motion.div layout>
              <p className=" text-center p-4 text-xl font-medium">Initial Consultation</p>
            </motion.div>
          </div>

          <div className="w-[300px] h-[200px] mx-auto">
            <motion.div
              layout
              data-isOpen={CollabIsOpen}
              initial={{ borderRadius: 50 }}
              onClick={() => setCollabIsOpen(!CollabIsOpen)}
              className={`flex justify-center items-center p-2 w-[100px] h-[100px] mx-auto mt-8 bg-white border rounded-full cursor-pointer ${CollabIsOpen && ('w-[250px] h-[150px]')}`}
            >
              {CollabIsOpen && 
                <div className="text-xs p-2">
                  Embark on a design journey tailored to your vision, collaborating seamlessly with our team.
                </div>
              }
              <motion.div layout className={`w-10 h-10 ml-4 ${CollabIsOpen &&('ml-0')}`}>
                <GrAction className='mx-auto' size={40} />
              </motion.div>
              <motion.div className="w-4 h-4">
                {CollabIsOpen ? 
                  <BiChevronLeft size={15} className="mx-auto" /> :
                  <BiChevronRight size={15} className="mx-auto" />
                }
              </motion.div>
            </motion.div>
            <motion.div layout>
              <p className=" text-center p-4 text-xl font-medium">Collaboration</p>
            </motion.div>
          </div>

          <div className="w-[300px] h-[200px] mx-auto">
            <motion.div
              layout
              data-isOpen={EffortbIsOpen}
              initial={{ borderRadius: 50 }}
              onClick={() => setEffortIsOpen(!EffortbIsOpen)}
              className={`flex justify-center items-center p-2 w-[100px] h-[100px] mx-auto mt-8 bg-white border rounded-full cursor-pointer ${EffortbIsOpen && ('w-[250px] h-[150px]')}`}
            >
              {EffortbIsOpen && 
                <div className="text-xs p-2">
                  Enjoy a hassle-free experience with comprehensive support—no lengthy meetings, just results.
                </div>
              }
              <motion.div layout className={`w-10 h-10 ml-4 ${EffortbIsOpen &&('ml-0')}`}>
                <GrChatOption className='mx-auto' size={40} />
              </motion.div>
              <motion.div className="w-4 h-4">
                {EffortbIsOpen ? 
                  <BiChevronLeft size={15} className="mx-auto" /> :
                  <BiChevronRight size={15} className="mx-auto" />
                }
              </motion.div>
            </motion.div>
            <motion.div layout>
              <p className=" text-center p-4 text-xl font-medium">Effortless Support</p>
            </motion.div>
          </div>

          <div className="w-[300px] h-[200px] mx-auto">
            <motion.div
              layout
              data-isOpen={FlexbIsOpen}
              initial={{ borderRadius: 50 }}
              onClick={() => setFlexIsOpen(!FlexbIsOpen)}
              className={`flex justify-center items-center p-2 w-[100px] h-[100px] mx-auto mt-8 bg-white border rounded-full cursor-pointer ${FlexbIsOpen && ('w-[250px] h-[150px]')}`}
            >
              {FlexbIsOpen && 
                <div className="text-xs p-2">
                  Review and refine your designs on your own schedule, ensuring the end result perfectly aligns with your aspirations.
                </div>
              }
              <motion.div layout className={`w-10 h-10 ml-4 ${FlexbIsOpen &&('ml-0')}`}>
                <GrCycle className='mx-auto' size={40} />
              </motion.div>
              <motion.div className="w-4 h-4">
                {FlexbIsOpen ? 
                  <BiChevronLeft size={15} className="mx-auto" /> :
                  <BiChevronRight size={15} className="mx-auto" />
                }
              </motion.div>
            </motion.div>
            <motion.div layout>
              <p className=" text-center p-4 text-xl font-medium">Flexible Revisions</p>
            </motion.div>
          </div>

        </div>
      </div>
    )
  }
  