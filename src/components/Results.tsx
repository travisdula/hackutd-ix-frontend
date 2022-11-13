import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import waves2 from '../images/waves2.svg'
import CityContainer from './CityContainer'
import { send_city  }from '../drx_api'


function Results() {
    const {ideal, destination, radius} = useParams()
    const [cities, setCities] = useState()
    const results = send_city(ideal, destination, +(radius || 0))
    return (
        <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center">
            <div className="bg-knock-blue w-fit mt-20 mb-2 rounded-md">
                <div className="text-[45px] font-extrabold mx-4 text-[#EEF4FF]">
                    <Link to="/">
                    knock knock
                    </Link>
                </div>
            </div>

            <h1 className="italic text-[#434C5E] text-lg mb-8">find your new neighborhood</h1>

            {results.sort((a:any,b:any) => b[2] - a[2]).map((x: Array<any>) => (<CityContainer key={x[0]} zipCode={x[0]} city={x[1]} score={x[2]*100}/>))}

            <img alt="waves" src={waves2} className="z-0 fixed bottom-0"/>
      </div>
    )
}

export default Results
