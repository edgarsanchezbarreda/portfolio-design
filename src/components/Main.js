import React from 'react';
import { motion } from 'framer-motion';

export const Main = () => {
    return (
        <motion.div className='flex flex-col self-center bg-offWhite dark:bg-lightBlack pt-12 sm:pt-8 md:pt-12md:mx-12 md:max-w-3xl mt-[128px]'>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.65, ease: 'easeOut' }}
                className='flex text-3xl md:text-6xl text-lightBlack dark:text-offWhite'
            >
                <h3 className=''>Hello&nbsp;</h3>
                <span className='animate-wave'>👋🏼</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.75, ease: 'easeOut' }}
                className='pt-12 md:pt-6 text-subHeading text-xl md:text-5xl leading-8 md:leading-normal tracking-wider'
            >
                <p>
                    My name is{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                        Edgar Sanchez
                    </span>
                    , I am a Full-Stack Developer and Designer based in Los
                    Angeles, CA
                </p>
            </motion.div>

            <motion.a
                href='#AboutMe'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                className='flex justify-between text-lightBlack dark:text-offWhite border border-lightBlack dark:border-offWhite rounded-full mt-48 py-6 px-10 hover:scale-102 transition ease-out duration-300 group hover:border-violet-300'
            >
                <div className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 transition ease-out duration-300'>
                    Scroll Down
                </div>
                <div className='group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                    <span className='text-xl group-hover:text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 transition ease-out duration-300'>
                        -&gt;
                    </span>
                </div>
            </motion.a>
        </motion.div>
    );
};
