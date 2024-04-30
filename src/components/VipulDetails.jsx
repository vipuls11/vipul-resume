import React from 'react';

function VipulDetails(props) {
    return (
        <div>
            <div className="mx-4 shadow-lg">
                <div className="relative">
                    <img
                        src={props.image}
                        alt="Vipul Vishwakarma"
                        className="" />
                    <div className="image_card  absolute top-0 right-0 bottom-0 left-0 text-end w-full h-full bg-cover overflow-hidden opacity-0 transition duration-300 ease-in-out bg-sky-950 hover:opacity-60">
                        <div className="flex lg:text-4xl text-2xl gap-2 items-end justify-center text-white  w-full h-full">
                            <a href={props.Linkedin}>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <div className="flex justify-between mx-4  py-4 border-b border-gray-400">
                        <h1 className="text-lg  text-sky-950 hover:text-red-600 font-semibold">
                            <a href="#">{props.number}</a>
                        </h1>
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-7 h-7 text-red-600"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </p>
                    </div>

                    <div className="flex justify-between mx-4  py-4 border-b border-gray-400">
                        <h1 className="text-lg  text-sky-950 hover:text-red-600 font-semibold">
                            <a href="#">{props.email}</a>
                        </h1>
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-7 h-7 text-red-600"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </p>
                    </div>

                    <div className="flex justify-between mx-4  py-4 ">
                        <h1 className="text-lg text-sky-950 hover:text-red-600 font-semibold">
                            {props.address}
                        </h1>
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-7 h-7 text-red-600"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VipulDetails