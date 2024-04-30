import React from 'react';

const AboutUs = (props) =>{
    return(
        <>
           <div className="">
            <h2 className="lg:text-6xl md:text-3xl text-2xl font-extrabold text-sky-950 uppercase">
             {props.Name}
            </h2>
            <h6 className="text-red-800 text-md font-semibold capitalize">
              {props.Designation}
            </h6>
            <div className="my-5">
              <div className="text-black text-lg ">
                <div className="">
                  <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                    ABOUT US :
                  </span>
                  <p className="text-[17px] mt-3 leading-8 text-justify">
                    {props.About}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default AboutUs;