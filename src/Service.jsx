import React from 'react';
import Card from './Card';
import Imagedata from './Imagedata';




const Service = () => {
    return (
     <>
      <div className="my-5">
            <h1 className="text-center"> Our Services </h1>
           </div> 


         <div className="Container-fluid">
               <div className="row">
               <div className="col-10 mx-auto">
               <div className="row">
            {
             Imagedata.map((val,ind) => {
              return <Card key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
             />
             })

            }
               
             
           </div>
           </div>
           </div>
           </div>
      
      
      
    </>

    );
};




export default Service;