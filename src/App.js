import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { AboutMe } from './components/AboutMe';

function App() {
    return (
        <div className=''>
            {/* Home Page */}
            <div className='bg-offWhite dark:bg-lightBlack box-border h-screen w-full font-cascadia'>
                {/* <div className='bg-offWhite dark:bg-lightBlack box-border h-screen w-full'> */}
                {/* ContentContainer */}
                <div className='flex flex-col mx-12 md:mx-0'>
                    <Navbar />
                    <Main />
                    {/* <AboutMe /> */}
                </div>
            </div>
            {/* About Me Section */}
            <div className='bg-offWhite dark:bg-lightBlack box-border h-screen w-full'>
                <AboutMe />
            </div>
        </div>
    );
}

export default App;
