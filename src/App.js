import React from "react";
import VipulDetailsList from "./pages/VipulDetailsList";
import VipulFullDetails from "./pages/VipulFullDetailsList";
import VipulPersonalDetails from "./pages/VipulPersonalDetails";
import AboutUsList from "./pages/AboutUsList";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="">
      <h2 className="lg:text-5xl text-3xl py-3 lg:mx-8 mx-4 mt-5 border-b-4 border-sky-950 font-extrabold text-sky-950 uppercase text-center">
        Career Summary
      </h2>

      <div className="lg:flex container mx-auto my-20">
        <div className="lg:w-1/3">
          <VipulDetailsList />
          <div>
            <VipulPersonalDetails />
          </div>
        </div>
        <div className="lg:w-2/3">
          <div className="mx-8">
            <AboutUsList />
            {/* ..............................................Project&RESPONSIBILITES.......  */}
            <div className="mb-5">
              <div className="grid lg:grid-cols-2 gap-5 text-black text-lg mt-5">
                <div className="">
                  <Projects />
                  {/* <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                  PROJECTS :
                </span>
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
                        href="http://theme3.jewelwebnet.com/"
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
                </ul> */}
                </div>
                <div>
                  <div className="">
                    <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                      RESPONSIBILITES :
                    </span>
                    <ul className="list-disc text-[17px] mt-3 leading-8">
                      <li>Developing front end website architecture</li>
                      <li>Designing user interactions on web pages</li>
                      <li>Developing front end website architecture</li>
                      <li>Developing back end website applications</li>
                      <li>Creating servers and databases for functionality</li>
                      <li>
                        Ensuring cross-platform optimization for mobile phones
                      </li>
                      <li>Ensuring responsiveness of applications</li>
                      <li>
                        Seeing through a project from conception to finished
                        product
                      </li>
                      <li>Designing and developing APIs</li>
                      <li>Meeting both technical and consumer needs</li>
                      <li>Experience with database systems (e.g., MySQL)</li>
                      <li>
                        Excellent communication skills to collaborate
                        effectively with team members and clients
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ..............................................EXPERTISEt & EDUCATION.......  */}
            <div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div>
                  <VipulFullDetails />
                </div>
                <div>
                  <div>
                    <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                      EDUCATION :
                    </span>
                    <ul className="text-[17px] mt-3 leading-8">
                      <li>
                        <h3 className="font-semibold">Graduation</h3>
                        <p>
                          Bsc Computer science (graduate) from Mumbai university
                          in the year 2021.First Class , CGPI-8.3
                        </p>
                      </li>
                      <li>
                        <h3 className="font-semibold">HSC</h3>
                        <p>
                          Hsc passed from Maharashtra board in the year 2018.
                          With an aggregate 51%
                        </p>
                      </li>
                      <li>
                        <h3 className="font-semibold">SSC</h3>
                        <p>
                          SSC passed from Maharashtra board in the year 2016.
                          With an aggregate 70%
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ....................Language &  Certifications.............. */}
            <div className="mt-5">
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="">
                  <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                    LANGUAGE :
                  </span>
                  <ul className=" text-[17px] mt-3 leading-8">
                    <li>English</li>
                    <li>Marathi</li>
                    <li>Hindi</li>
                  </ul>
                </div>
                <div class="">
                  <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                    CERTIFICATIONS :
                  </span>
                  <ul className="list-disc text-[17px] mt-3 leading-8">
                    <li>
                      <p>
                        I completed a Front end development -HTML and software
                        testing certification from the Great Learning Academy
                      </p>
                    </li>
                    <li>
                      <p>
                        I completed a React js development Course from the Udemy
                        Academy
                      </p>
                      <a
                        href="https://www.udemy.com/certificate/UC-b00065d1-b746-40bd-be67-56d75ce41525/"
                        className="text-blue-800 underline text-sm"
                        target="_blank"
                      >
                        React Course Certifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* .............................Experience................. */}
            <div className="mt-5">
              <h3 className="uppercase font-semibold pb-1 border-b-4 text-center border-sky-950">
                EXPERIENCE
              </h3>
              <div className="">
                <ul className="disc text-[17px] mt-3 leading-8">
                  <li>
                    Work in <b>Oriflamme IT Solutions</b> as Software Devloper
                    from October 2022 to Till Date
                  </li>
                  <li>
                    <b>Location :- </b>Andheri East
                  </li>
                  <li>
                    <b>Projects 1 :- </b>
                    <a
                      href="https://www.oriflammeitsolutions.com/Index"
                      className="text-blue-800 underline"
                      target="_blank"
                    >
                      www.oriflammeitsolutions.com
                    </a>
                  </li>
                  <li>
                    <b>Date:- </b>
                    October 2022 to till date
                  </li>
                </ul>
                <p>
                  <b>Job profile :-</b>
                  Oriflamme IT Solution provides IT Support and Consulting
                  Services to customers. role and responsibilities are to
                  optimize and develop the company's official website on both
                  front end and backend, Website custom design, developing
                  planning and executing that process as well, ensuring that
                  your new website is optimized for search engines and designed
                  with your customers in mind.
                </p>
                <p>
                  In addition, it includes website maintenance, testing,
                  debugging, and troubleshooting. The website should be
                  user-friendly and accessible to all users. Additionally, the
                  website should be optimized for search engine visibility.
                </p>
              </div>

              <div className="">
                <ul className="disc text-[17px] mt-3 leading-8">
                  <li>
                    <b>Project Name:- </b>
                    <b>Jewel Webnet</b> Website design and development
                  </li>
                  <li>
                    <b>Location :- </b>Andheri East
                  </li>
                  <li>
                    <b>Project 2:- </b>
                    <a
                      href="http://theme3.jewelwebnet.com/"
                      className="text-blue-800 underline"
                      target="_blank"
                    >
                      www.jewelwebnet.com
                    </a>
                  </li>
                  <li>
                    <b>Date:-</b>
                    June 2023 till date
                  </li>
                </ul>
                <p>
                  <b>Job profile :- </b>
                  Jewel Webnet is part of oriflamme IT Solutions which offers
                  web solutions for jewelry and other businesses. I am
                  responsible for developing the website of the company, as well
                  as front end designing and backend structure of the website,
                  planning, and executing it, as well as making sure the new
                  site is SEO-optimized and built with user experience in mind.
                </p>
                <p>
                  Page layout design for database integration in SQL, Website
                  blog page design, newsletter popup, Ebooks Download
                  integration, Landing Pages and Product page design for an
                  online store. Creating a custom eCommerce website. Developing
                  custom themes and plugins, CSS styling and HTML coding.
                  Responsive design for mobile and tablet devices.
                </p>
                <p>
                  Testing and troubleshooting websites. Optimizing websites for
                  speed and performance. Maintaining website security and
                  resolving any technical issues. Developing and testing web
                  applications. Designing and developing responsive websites.
                </p>
                <p>
                  As well as preparing for client requirements. Front-end design
                  for e-Commerce themes.
                </p>
              </div>

              <div className="">
                <ul className="disc text-[17px] mt-3 leading-8">
                  <li>
                    <b>Project Name:- </b>
                    <b>A1 Employment Services</b>
                  </li>
                  <li>
                    <b>Project 3:- </b>
                    <a
                      href="http://theme3.jewelwebnet.com/"
                      className="text-blue-800 underline"
                      target="_blank"
                    >
                      www.a1employmentservices.com
                    </a>
                  </li>
                  <li>
                    <b>Date:- </b>
                    January 2023 to March 2023
                  </li>
                </ul>
                <p>
                  <b>Job profile :- </b>I am responsible for developing the
                  front end and backend design of the website, planning, and
                  executing it, as well as making sure the new site is
                  SEO-optimized and built with user and mobile friendly.
                </p>
              </div>

              <div className="">
                <ul className="disc text-[17px] mt-3 leading-8">
                  <li>
                    <b>Project Name:- </b>
                    <b>Hg Jewels</b>
                  </li>
                  <li>
                    <b>Project 3:- </b>
                    <a
                      href="www.hgjewel.com"
                      className="text-blue-800 underline"
                      target="_blank"
                    >
                      www.hgjewel.com
                    </a>
                  </li>
                  <li>
                    <b>Date:- </b>
                    October 2022 to December 2022
                  </li>
                </ul>
                <p>
                  <b>Job profile :-</b>I am responsible for developing the front
                  end and backend design of the website, planning, and executing
                  it, as well as making sure the new site is SEO-optimized and
                  built with user and mobile friendly.
                </p>
              </div>

              <div className="">
                <ul className="disc text-[17px] mt-3 leading-8">
                  <li>
                    <b>Project Name:- </b>
                    <b>Theme 3</b>
                  </li>
                  <li>
                    <b>Project 3:- </b>
                    <a
                      href="http://theme3.jewelwebnet.com/"
                      className="text-blue-800 underline"
                      target="_blank"
                    >
                      www.theme3.jewelwebnet.com
                    </a>
                  </li>
                  <li>
                    <b>Date:- </b>
                    2023
                  </li>
                </ul>
                <p>
                  <b>Job profile :-</b>I am responsible for developing the front
                  end and backend design of the website, planning, and executing
                  it, as well as making sure the new site is SEO-optimized and
                  built with user and mobile friendly.
                </p>
              </div>

              <div className="mt-5">
                <span className="uppercase font-semibold pb-1 border-b-4 pr-5 border-sky-950">
                  All projects are uploaded in
                </span>
                <ul className="disc text-[17px] mt-3 leading-8">
                  <li>
                    <b>GitHub :- </b>
                    <a
                      href="https://github.com/vipuls11?tab=repositories"
                      className="text-blue-800 underline uppercase"
                      target="_blank"
                    >
                      GitHub Repositories
                    </a>
                  </li>
                  <li>
                    <b>Link 1 :- </b>
                    <a
                      href="https://growmark-theta.vercel.app/"
                      className="text-blue-800 underline uppercase"
                      target="_blank"
                    >
                      Grow mark
                    </a>
                  </li>
                  <li>
                    <b>Link 2 :- </b>
                    <a
                      href="https://urotech.vercel.app/"
                      className="text-blue-800 underline uppercase"
                      target="_blank"
                    >
                      UROTEC SOLUTIONS PVT. LTD.
                    </a>
                  </li>
                  <li>
                    <b>Link 3 :- </b>
                    <a
                      href="https://counceling.vercel.app/"
                      className="text-blue-800 underline uppercase"
                      target="_blank"
                    >
                      PSYCHOKNOWMICS COUNSELING & EDUCATIONAL SERVICES
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
