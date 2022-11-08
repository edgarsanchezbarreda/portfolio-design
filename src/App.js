import { Navbar } from './components/Navbar';
import { Main } from './components/Main';

function App() {
    return (
        <div className='bg-offWhite dark:bg-lightBlack box-border h-screen w-full'>
            {/* ContentContainer */}
            <div className='flex flex-col mx-12 md:mx-0 font-cascadia'>
                <Navbar />
                <Main />
            </div>
        </div>
    );
}

export default App;
