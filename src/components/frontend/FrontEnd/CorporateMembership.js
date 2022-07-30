import React from 'react';
import BrandPage from './CorporateMembership/BrandPage';
import BrandWeWork from './CorporateMembership/BrandWeWork';
import CommunicateDirectly from './CorporateMembership/CommunicateDirectly';
import CompetitorAnalysis from './CorporateMembership/CompetitorAnalysis';
import CorporateBanner from './CorporateMembership/CorporateBanner';
import CorporateFeature from './CorporateMembership/CorporateFeature';
import DriveChange from './CorporateMembership/DriveChange';
import OnlineReputation from './CorporateMembership/OnlineReputation';
import WorkWithUs from './CorporateMembership/WorkWithUs';
import Footer from './Footer/Footer';
import Navbar2 from './Navbar/Navbar2';

function CorporateMembership() {
    return (
        <div className='r mx-auto'>
            <Navbar2/>
            <CorporateBanner/>
            <CorporateFeature/>
            <BrandPage/>
            <OnlineReputation/>
            <CommunicateDirectly/>
            <DriveChange/>
            <CompetitorAnalysis/>
            <BrandWeWork/>
            <WorkWithUs/>
            <Footer/>   
        </div>
    );
}

export default CorporateMembership;