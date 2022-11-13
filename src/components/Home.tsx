import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import waves1 from '../images/waves1.svg';
import whitehouse from '../images/whitehouse.png';

function Home() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    
    const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {
        evt.preventDefault();
        //alert(`Submitting Name "${origin}", "${destination}"`)
    }

    return (
      <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center">
      <div className="bg-[#475790] w-fit mt-20 mb-2 rounded-md">
        <div className="text-[45px] font-extrabold mx-4 text-[#EEF4FF]">
          knock knock
        </div>
      </div>
      <h1 className="italic text-[#434C5E] text-lg">
        find your new neighborhood
      </h1>
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="h-14 bg-[#ECEFF4] text-center mt-8 text-3xl rounded-md border-[1px] border-[#434C5E] placeholder:text-2xl"
            placeholder="enter your location"
            onChange={(e) => setOrigin(e.target.value)}/>
          <input
            className="h-14 bg-[#ECEFF4] text-center mt-8 text-3xl rounded-md border-[1px] border-[#434C5E] placeholder:text-2xl"
            placeholder="search for metro area"
            onChange={(e) => setDestination(e.target.value)}/>
        <Link
            to={`/results/:${origin}/:${destination}`}>
            <img alt="choose yours" src={whitehouse} className="mt-6 w-20"/>
        </Link>
        </form>
      </div>
      <img alt="" src={waves1} className="absolute inset-x-0 bottom-0"/>
    </div>
    )
}

export default Home
