import react from 'react'
import Header from '../../Shared/Header/Header';
import ExtraSection from '../ExtraSection/ExtraSection';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return(
        <div>
            <Header></Header>
        <TopBanner></TopBanner>
        <ExtraSection></ExtraSection>
        </div>
    );
}

export default Home;