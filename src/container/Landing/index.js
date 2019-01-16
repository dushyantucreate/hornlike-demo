import React, { Component } from 'react';
import MainHeader from '../../component/MainHeader/HomeHeader';
import HeroSection from '../../component/HeroSection/Hero'

class Landing extends Component {
  render() {
      return (
        <div>
            <MainHeader />
            <HeroSection />
        </div>
      );
  }
}

export default Landing;
