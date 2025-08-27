import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import FaqSection from './FaqSection';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ImpactSection from './ImpactSection';
import ArticleSection from './ArticleSection';
import CampaignSection from './CampaignSection';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import FeatureSection from './FeatureSection';

const Home = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FeatureSection />
            <CampaignSection />
            <ImpactSection />
            <ArticleSection />
            <FaqSection />
            <Footer />
        </DefaultLayout>
    );
};

export default Home;