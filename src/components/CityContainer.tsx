import dallas from '../images/dallas.jpg'
import { Link, useParams } from 'react-router-dom'

interface CityParams {
    prior: string | undefined
    zipCode: string | undefined
    city: string | undefined
    score: number | undefined
}
function CityContainer(props: CityParams) {
    //const {origin, destination, zipCode} = useParams()
    const origin = props.prior
    const destination = props.city
    const zipCode = props.zipCode

    return (
        <div className="mx-auto flex items-center justify-center mb-6 z-10">
            <img src={dallas} className="object-contain h-32 w-32 rounded-l-lg"/>
            <div className="bg-light-container rounded-r-lg h-32 w-96 p-4">
                <Link to={`/details/:${origin}/:${destination}/:${zipCode}`}>
                    <div className="font-bold text-2xl">
                       {props.city}, TX
                    </div>
                </Link>
                <div>{props.score}% Similarity</div>
                <div>Greater Dallas Area</div>
                <div>{props.zipCode}</div>
            </div>
        </div>
    )
}

export default CityContainer
