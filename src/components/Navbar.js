import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toggle } from './Toggle';

export const Navbar = () => {
    return (
        <div className='fixed z-10 top-0 left-0 right-0 flex flex-col sm:flex-row md:justify-between md:items-center pt-8 px-12  text-[13px] text-lightBlack dark:text-offWhite backdrop-blur'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.95, ease: 'easeOut' }}
                className='w-full mb-2'
            >
                <a href='#top'>
                    <h1 className='text-5xl md:text-4xl'>EdgarS.&copy;</h1>
                </a>
            </motion.div>

            <motion.div
                // initial={{ opacity: 0, y: 10 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 1, delay: 1.05, ease: 'easeOut' }}
                className='flex items-center justify-between pt-4 sm:pt-0 gap-8 sm:gap-6 md:gap-12 text-md md:text-lg'
            >
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.05, ease: 'easeOut' }}
                    className='transition ease-out duration-300 hover:underline  hover:underline-offset-8 whitespace-nowrap scroll-smooth'
                    href='#AboutMe'
                >
                    About Me
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.15, ease: 'easeOut' }}
                    className='hover:underline  hover:underline-offset-8'
                    href='/#'
                >
                    Projects
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.25, ease: 'easeOut' }}
                    className='hover:underline  hover:underline-offset-8'
                    href='/#'
                >
                    Contact
                </motion.a>
                {/* <div>
                    <Toggle />
                </div> */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.35, ease: 'easeOut' }}
                >
                    <Toggle />
                </motion.div>
            </motion.div>
        </div>
    );
};
