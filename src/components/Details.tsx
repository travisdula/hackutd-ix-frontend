import { Link, useParams } from "react-router-dom"
import waves2 from '../images/waves2.svg'

function Details() {
    const {origin, destination, zipCode} = useParams()
    //["77431","Danciger",198.9466,21,65,35,36,3748,164.467035456,344,235009.59,58]
    return (
        <div className="min-h-screen bg-light-blue place-self-center flex flex-col items-center border border-separate border-spacing-10">
            <table className="table-auto min-w-1/2">
                <tr className="">
                    <th>
                        Attribute
                    </th>
                    <th>
                        Ideal
                    </th>
                    <th>
                        Selected
                    </th>
                </tr>
                <tr>
                    <td>
                        City
                    </td>
                    <td>
                        temperature
                    </td>
                    <td>
                        COL
                    </td>
                </tr>
                <tr>
                    <td>
                        zip
                    </td>
                    <td>
                        precipitation
                    </td>
                    <td>
                        housing
                    </td>
                </tr>
                <tr>
                    <td>
                        age
                    </td>
                    <td>
                        air_qual
                    </td>
                    <td>
                        crime
                    </td>
                </tr>
            </table>
            <img src={waves2} className="z-0 fixed bottom-0"/>
        </div>
    )
}

export default Details
