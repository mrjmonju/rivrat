import React from 'react';
import AddsPreferred from './AdvertisingSolution/AddsPreferred';
import AdvertisingCount from './AdvertisingSolution/AdvertisingCount';
import AdvertisingModel from './AdvertisingSolution/AdvertisingModel';
import StrongPartnership from './AdvertisingSolution/StrongPartnership';
import WorkWithUs from './CorporateMembership/WorkWithUs';
import Footer from './Footer/Footer';
import Navbar2 from './Navbar/Navbar2';

function AdvertisingSolution() {
    return (
        <div>
            <Navbar2/>
            <AdvertisingCount/>
            <AddsPreferred/>
            <StrongPartnership/>
            <AdvertisingModel/>
            <WorkWithUs/>
            <Footer/>
        </div>
    );
}

export default AdvertisingSolution;