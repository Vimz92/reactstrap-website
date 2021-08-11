import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/vimaldesigns.png";

const Common = (props) => {
    return (
   <>
      <section id="header" className="d-flex">
      <div className="container-fluid nav_bg">
        <div className = "row">
          <div className="col-10 mx-auto"> 
          
          <div className="col-md-6  pt-lg-0 order-2 order-lg-1 d-flex flex-column"> 
            <h1>  
                 {props.name}
                 <strong className="brand-name"> <i> VDSIGN </i> </strong> </h1>
            <h2 className="my-3">
              <i> What U Desire that V Design </i>
              </h2>
              
              <div className="mt-3">
               <NavLink to={props.visit} className="btn"> {props.btname} </NavLink>
              </div>
            
    
     
              
              <div className="col-lg-10 order-lg-2 header-img flex-row">
                <img src={props.imgsrc} className="img" alt="image" />
                </div>

            
                </div>
                </div>
                </div>
               
              
      </div>

      </section>

   </>
    );
};




export default Common;