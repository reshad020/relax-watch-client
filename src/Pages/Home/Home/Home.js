import react from 'react'
import Products from '../../Products/Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ExtraSection from '../ExtraSection/ExtraSection';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return(
        <div>
            <Header></Header>
        <TopBanner></TopBanner>
        <ExtraSection></ExtraSection>
        <Products></Products>
        <Footer></Footer>
        </div>
    );
}

export default Home;