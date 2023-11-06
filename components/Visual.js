import Image from 'next/image'

import banner from '../public/banner1.avif'

export default function Visual() {
  return (
    <section className='relative flex flex-wrap w-full h-auto overflow-hidden'>
        <h1 className='text-4xl font-semibold p-2 text-center mt-16 w-full'>Crafting <b className="text-[#FA9F43]">Unique</b> Visual Narrative</h1>
        <div className='flex flex-wrap w-[1240px] min-h-[600px] mx-auto xl:mt-16'>
            <div className='sm:w-[600px] p-6 mt-16 mx-auto text-left'>
                <h2 className='font-semibold text-lg'>
                    At <b className="text-[#FA9F43]">Odot Design</b>, we understand the importance of visual storytelling. Our customized branding solutions and web design expertise create unique narratives that resonate with your audience.
                </h2>
                <p className='mt-16'>
                    Your designs are <b className="text-[#FA9F43]">uniquely</b> tailored to resonate with your brand's voice.
                </p>
                <p className='mt-16'>
                    <b className="text-[#FA9F43]">We prioritize</b> both beauty and usability in 
                    your digital presence.
                </p>
                <p className='mt-16'>
                    We offer comprehensive <b className="text-[#FA9F43]">support</b> from the project's
                    inception to its execution.
                </p>
            </div>
            <div className='p-10 mt-16 mx-auto'>
                <Image src={banner} alt='Design image' className='w-[400px] h-[400px] mx-auto rounded-3xl shadow-black shadow-xl object-cover' width={400}/>
            </div>
        </div>

        <div className='absolute bg-[#FCD307] w-[600px] h-[500px] rounded-s-3xl bottom-0 xl:bottom-16 right-0 -z-10 overflow-hidden'/>
    </section>
  )
}
