import dallas from '../images/dallas.jpg'

interface CityParams {
    zipCode: string | undefined
    city: string | undefined
    score: number | undefined
}
function CityContainer(props: CityParams) {
    return (
        <div className="mx-auto flex items-center justify-center mb-6 z-10">
            <img src={dallas} className="object-contain h-32 w-32 rounded-l-lg"/>
            <div className="bg-light-container rounded-r-lg h-32 w-96 p-4">
                <div className="font-bold text-2xl">
                    {props.city}, TX
                </div>
                <div>{props.score}% Similarity</div>
                <div>Greater Dallas Area</div>
                <div>{props.zipCode}</div>
            </div>
        </div>
    )
}

export default CityContainer
