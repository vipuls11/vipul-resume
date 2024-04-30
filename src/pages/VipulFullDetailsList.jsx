import React from 'react';

const VipulFullDetailsList = () =>{
   

    const Projects=[
        {     
            lid:1,
            list:'HTML5, CSS, Java Script',
        },
         {  lid:2,
            list:'GitHub, PHP, MySql',
        },
         {  
            lid:3,
            list:'Tailwid CSS, Bootstrap',
        },
         {  
          lid:4,
            list:'Laravel',
        },
        {
            lid:5,
            list:'React JS',
        },
        {   
            lid:6,
            list:'frontend data base',
        },
        { 
            lid:7,
            list:'Validation',
        }
    ]

    const Projectlists = Projects.map((item)=>{
    return(<ul className="disc text-[17px] mt-3 ">
      <li key={item.lid}>{item.list}</li>
      </ul>)
    })
return(
    <>
            <div>
              <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                EXPERTISE :
              </span>
              <div className="">
                {Projectlists}
              </div>                          
            </div>
        
    </>
)
}

export default VipulFullDetailsList;