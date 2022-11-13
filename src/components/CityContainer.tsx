import dallas from '../images/dallas.jpg'

function CityContainer() {
    return (
        <div className="mx-auto flex items-center justify-center mb-6 z-10">
            <img src={dallas} className="object-contain h-32 w-32 rounded-l-lg"/>
            <div className="bg-light-container rounded-r-lg h-32 w-96 p-4">
                <div className="font-bold text-2xl">
                    Richardson, TX
                </div>
                <div>x% Similarity</div>
                <div>Greater Dallas Area</div>
                <div>75080</div>
            </div>
        </div>
    )
}

export default CityContainer