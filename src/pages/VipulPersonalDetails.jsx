import React from 'react';
import VipulFullDetails from '../components/VipulFullDetails';
 
const VipulPersonalDetails = () =>{
     const Name ='Mr. Vipul Vishwakarma';
    const Fname ='Mr. Vijay Prakash Vishwakarma';
    const DBirth =' 11th October 1999'
    const   Male='Male';
    const Indian = 'Indian';
    const  Hindu = ' Hindu';
    const Language='English, Hindi, Marathi';
    const Hobbies= ' Reading books, travelling & cricket';
    return(
        <>
        <VipulFullDetails Name={Name} Fname={Fname} DBirth={DBirth} Male={Male} Indian={Indian} Hindu={Hindu} Language={Language} Hobbies={Hobbies}/>
        </>
    )
}

export default VipulPersonalDetails