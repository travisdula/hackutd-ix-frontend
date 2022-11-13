import { Link, useParams } from "react-router-dom"
import waves1 from '../images/waves1.svg'

function Details() {
    const {origin, destination, zipCode} = useParams()
    //["77431","Danciger",198.9466,21,65,35,36,3748,164.467035456,344,235009.59,58]
    return (
        <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center border border-separate border-spacing-10">
            
            <div className="bg-knock-blue w-fit mt-20 mb-2 rounded-md">
            <div className="text-[45px] font-extrabold mx-4 text-[#EEF4FF]">
                <Link to="/">
                    knock knock
                </Link>
            </div>
            </div>
            <h1 className="italic text-[#434C5E] text-lg mb-8">
                find your new neighborhood
            </h1>
            <div className="bg-light-container p-4 rounded-lg border-[1px] border-knock-blue">
            <table className="table-fixed">
                <thead className="text-2xl">
                    <th className="w-48">
                        attribute
                    </th>
                    <th className="w-48">
                        ideal
                    </th>
                    <th className="w-48">
                        selected
                    </th>
                </thead>
                <tbody className="text-center text-lg">
                <tr>
                    <td>City</td>
                    <td>Bacliff</td>
                    <td>Danciger</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td>56 F</td>
                    <td>36 F</td>
                </tr>
                <tr>
                    <td>Cost of Living</td>
                    <td>127.19131335</td>
                    <td>198.9466</td>
                </tr>
                <tr>
                    <td>Zip Code</td>
                    <td>77431</td>
                    <td>77518</td>
                </tr>
                <tr>
                    <td>Precipitation</td>
                    <td>128.879 in</td>
                    <td>164.467035456 in</td>
                </tr>
                <tr>
                    <td>Housing</td>
                    <td>$1020986.2</td>
                    <td>$235009.59</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>27</td>
                    <td>58</td>
                </tr>
                <tr>
                    <td>Air Quality</td>
                    <td>335</td>
                    <td>344</td>
                </tr>
                <tr>
                    <td>Crime Rate</td>
                    <td>5935</td>
                    <td>3748</td>
                </tr>
                </tbody>
            </table>
            </div>
            <img src={waves1} className="absolute inset-x-0 bottom-0 max-h-80 w-screen"/>
        </div>
    )
}

export default Details
