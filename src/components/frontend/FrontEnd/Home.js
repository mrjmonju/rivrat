import React from 'react';
import Footer from './Footer/Footer';
import Banner from './Home/Banner';
import BrandComparison from './Home/BrandComparison';
import ComplaintsNumber from './Home/ComplaintsNumber';
import HaveComplaint from './Home/HaveComplaint';
import Slider from './Home/Slider';
import StarRanking from './Home/StarRanking';
import StudyTogether from './Home/StudyTogether';
import Navbar from './Navbar/Navbar'; 

const Home = () => {
    return ( 
        <>
            <Navbar/>
            <div className='bg-gray-100'>
            <Banner/>
            <Slider/>
            <BrandComparison/>
            <StarRanking/>
            <HaveComplaint/>
            <ComplaintsNumber/>
            <StudyTogether/>
            <Footer/>
        </div>
        </>
    );
};

export default Home;