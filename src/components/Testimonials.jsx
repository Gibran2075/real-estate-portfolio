import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';


const Testimonials = () => {
    const handleCardClick = (index) => {
        console.log(`Card with ID ${index} clicked!`);
        // You can also navigate to a detailed page or perform any action here
    };


  return (
    <motion.div 
    initial={{opacity: 0, x: 100}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
    className="flex flex-col items-center p-6 mb-12" id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Costumer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center tex-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                {testimonialsData.map(( project, index ) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-6 shadow-lg transform 
                        transition-transform duration-200 hover:scale-105 cursor-pointer"
                        onClick={() => handleCardClick(index)}>
                        <div className="flex items-center mb-4">
                            <img className="w-16 h-16 rounded-full mr-4" src={project.image} 
                            alt={project.alt} />
                            <div>
                                <h2 className="font-semibold text-lg">{project.name}</h2>
                                <p className="text-sm text-gray-500">{project.title}</p>
                                <div className="flex text-yellow-500">
                                    {[...Array(project.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            <FaQuoteLeft className="inline mr-2 text-gray-400" />
                            {project.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
  )
}

export default Testimonials