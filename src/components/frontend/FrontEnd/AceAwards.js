import React from 'react';
import GallerySlider from './AceAwards/GallerySlider';
import YourSuccess from './AceAwards/YourSuccess';
import WorkWithUs from './CorporateMembership/WorkWithUs';
import Footer from './Footer/Footer';
import Navbar2 from './Navbar/Navbar2';

function AceAwards() {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar2/>
            </div>
            <GallerySlider/> 
            <YourSuccess/>
            <WorkWithUs/>
            <div className='contaier mx-auto'>
                <Footer/>
            </div>
        </div>
    );
}

export default AceAwards;