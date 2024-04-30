import React from 'react';
import VipulFullDetailsList from '../pages/VipulFullDetailsList';


const VipulFullDetails=(props)=>{
    
return(
    <>
      <div className="mx-8 my-5">
            <div className=" my-5">
              <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                PERSONAL PROFILE :
              </span>
              <ul className="disc text-[17px] mt-3  leading-8">
                <li>
                  <p>
                    <b>Name :</b>
                    {props.Name}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Father’s name :</b>
                    {props.Fname}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Date of birth :</b>
                    {props.DBirth}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Gender :</b>
                    {props.Male}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Nationality :</b>
                    {props.Indian}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Religion :</b>
                    {props.Hindu}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Language known :</b>
                    {props.Language}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Hobbies :</b>
                   {props.Hobbies}
                  </p>
                </li>
              </ul>
            </div>
            <div>
             <VipulFullDetailsList/>
            </div>
          </div>
          </>
)
}

export default VipulFullDetails;