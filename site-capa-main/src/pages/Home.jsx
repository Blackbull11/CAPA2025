import Hero from '../layouts/Hero';
import Bento from '../layouts/Bento'
import Sponsor from '../layouts/Sponsor';
import SavoirPlus from '../layouts/SavoirPlus';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {

    return (
        <>
            <ScrollToTop />
            <Hero />
            <Bento />
            <Sponsor />
            <SavoirPlus />
            <div className='h-32' />
        </>
    );
};

export default Home;