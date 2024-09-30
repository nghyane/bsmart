import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="wrapper home-wrapper  blog-detail-wrapper">
      <Header/>
      
      <Outlet/>

      <Footer/>
    </div>
  );
};

export default MainLayout;
