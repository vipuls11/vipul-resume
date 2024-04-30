import React from 'react';
import VipulDetails from '../components/VipulDetails';

const image = 'https://i.pinimg.com/736x/fb/5f/34/fb5f340bfbe46d691b47f1742aa4f861.jpg';
    const Linkedin='https://www.linkedin.com/in/vipul-vishwakarma-963111211/';
    const number='+91 7900108552';
    const email='vipulvishwakarma161@gmail.com';
    const address=' Gautam nagar, Aarey milk colony,near modern bakery, Goregaon East Mumbai-400065'

    const VipulDetailsList=()=>{
        return(
            <>
            <VipulDetails image={image} number={number} Linkedin={Linkedin} email={email} address={address}/>
            </>
        )
    } 
    
    export default VipulDetailsList;