
import { CONTACT } from './data/Config'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <article className='relative font-sans text-white rounded-lg p-16' id='contact'>
        <header>
            <div className='text-blue-500 text-center text-6xl font-bold mt-10 mb-20'>Get in Touch</div>
        </header> 
        <section className='grid grid-cols-1 md:grid-cols-2 mt-6'>
            <section>
                {CONTACT.map((data) => (
                    <motion.article
                    key={data.id}
                    inital={{opacity:0,y:50}}whileInView={{opacity:1,y:0}}
                    transition={{duration:0.5}}
                    viewports={{once:true}}
                    className="mb-10">
                        <div className='bg-black z-20 md:w-11/12 w-full text-white rounded-xl'>
                            <div className='border border-yellow-500 bg-pink-500 rounded-xl p-3 flex items-center'>
                                <img src={data.icon} alt={data.title}
                                width={64}
                                height={64}
                                />
                                <div className='ml-10'>
                                    <h3 className='text-xl font-semibold'>{data.title}</h3>
                                    <p className='text-sm'>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </section>

            <motion.article
            transition={{duration:0.5,delay:0.6}}
            inital={{opacity:0}}
            animate={{opacity:1}}>
                <form action='' className='space-y-6'>
                    <section className='mx-auto rounded-lg max-w-lg'>
                        <div className='grid grid-cols-1 gap-4'>
                            <label htmlFor='name' className='block border-b'>
                                <input type='text' id='name' required placeholder='your name' className='apperance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium'></input>
                            </label>

                            <label htmlFor='phone' className='block border-b'>
                                <input type='tel' id='phone' required placeholder='your phone number' className='apperance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium'></input>
                            </label>

                            <label htmlFor='message' className='block border-b'>
                                <textarea rows="4" id='message' required placeholder='your name' className='apperance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium'>{" "}</textarea>
                            </label>

                            <button className='flex justify-center items-center'><div className='text-center bg-yellow-500 rounded-full w-40 '>
                            Send Message
                            </div></button>
                        </div>
                    </section>
                </form>
            </motion.article>
        </section>
    </article>
  )
}
