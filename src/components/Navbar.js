import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toggle } from './Toggle';

export const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between pt-8 md:mx-12  text-lightBlack dark:text-offWhite'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.95, ease: 'easeOut' }}
                className='pb-8'
            >
                <h1 className='text-5xl md:text-4xl'>EdgarS.&copy;</h1>
            </motion.div>

            <motion.div
                // initial={{ opacity: 0, y: 10 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 1, delay: 1.05, ease: 'easeOut' }}
                className='flex items-center justify-between sm:justify-end gap-6 sm:gap-12  text-md sm:text-lg '
            >
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.05, ease: 'easeOut' }}
                    className='transition ease-out duration-300 hover:underline  hover:underline-offset-8'
                    href='/#'
                >
                    Work
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.15, ease: 'easeOut' }}
                    className='hover:underline  hover:underline-offset-8'
                    href='/#'
                >
                    About Me
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
