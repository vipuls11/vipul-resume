import React from 'react';
import Projectlist from '../pages/ProjectList';

const Projects = () =>{
   
    //  const Projectlinks=[
    //     {   
    //         pid:"pid1",
    //         projectname:'Oriflamme IT Solutions - <span>Andheri</span>',
    //         urlname:'www.oriflammeitsolutions.com',
    //         url:'https://www.oriflammeitsolutions.com/Index'
    //     },
    //    {    
    //          pid:"pid2",
    //         projectname:'Jewel webnet - <span>Andheri</span>',
    //         urlname:'www.jewelwebnet.com',
    //         url:'https://www.jewelwebnet.com/'
    //     },
    //     {   
    //          pid:"pid3",
    //         projectname:'A1 Employment Services',
    //         urlname:'www.a1employmentservices.com',
    //         url:'https://a1employmentservices.com/'
    //     },
    //     {   
    //          pid:"pid4",
    //         projectname:'Theme 3',
    //         urlname:'www.theme3.jewelwebnet.com',
    //         url:'http://theme3.jewelwebnet.com/'
    //     },
    //     {   
    //          pid:"pid5",
    //         projectname:'Hg Jewels',
    //         urlname:'www.hgjewel.com',
    //         url:'www.hgjewel.com'
    //     },
    // ]
// const Projectdetail= Projectlinks.map(()=>{
//             console.log(Projectdetail ,'hello')
//             return(
//              <ul className="text-[17px] mt-3 ">
//                   <li key={Projectlinks.pid}>
//                     <p className="font-semibold m-0 p-0 leading-8">
//                     {Projectlinks.projectname}
//                     </p>
//                     <span>
//                       <a
//                         href={Projectlinks.url}
//                         className="text-blue-800 text-sm underline"
//                         target="_blank"
//                       >
//                         {Projectlinks.urlname}
//                       </a>
//                     </span>
//                   </li>
//                   </ul>
//             )
//         })
     

    return(
        <>
            <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                  PROJECTS :
                </span>
                <div className="">
                    
                  {/* {Projectdetail} */}
                </div>
                <ul className="text-[17px] mt-3 ">
                  <li>
                    <p className="font-semibold m-0 p-0 leading-8">
                    Oriflamme IT Solutions - <span>Andheri</span>
                    </p>
                    <span>
                      <a
                        href="https://www.oriflammeitsolutions.com/Index"
                        className="text-blue-800 text-sm underline"
                        target="_blank"
                      >
                        www.oriflammeitsolutions.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <p className="font-semibold m-0 p-0 leading-8">
                      Jewel webnet - <span>Andheri</span>
                    </p>
                    <span>
                      <a
                        href="https://www.jewelwebnet.com/"
                        className="text-blue-800 text-sm underline"
                        target="_blank"
                      >
                        www.jewelwebnet.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <p className="font-semibold m-0 p-0 leading-8 ">
                      A1 Employment Services
                    </p>
                    <span>
                      <a
                        href=""
                        className="text-blue-800 text-sm underline"
                        target="_blank"
                      >
                        www.a1employmentservices.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <p className="font-semibold m-0 p-0 leading-8">Theme 3</p>
                    <span>
                      <a
                        href="http://theme3.jewelwebnet.com/"
                        className="text-blue-800 text-sm underline"
                        target="_blank"
                      >
                        www.theme3.jewelwebnet.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <p
                      className="font-semibold m-0 p-0 leading-8 underline"
                      target="_blank"
                    >
                      Hg Jewels
                    </p>
                    <span>
                      <a
                        href="www.hgjewel.com"
                        className="text-blue-800 text-sm underline"
                      >
                        www.hgjewel.com
                      </a>
                    </span>
                  </li>
                </ul>
        </>
    )
}

export default Projects