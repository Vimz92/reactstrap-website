import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/vimaldesigns.png";
import Common from "./Common";

const Home = () => {
    return (
   <>
      <Common name="Grow your business with"
        imgsrc={web} 
        visit="/Service" 
        btname="Get Started"/>
   </>
    );
};




export default Home;